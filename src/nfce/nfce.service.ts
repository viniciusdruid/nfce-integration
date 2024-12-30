import { HttpException, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { firstValueFrom } from 'rxjs';
import { RequestNfceDto } from './dtos/request-nfce.dto';
import { ResponseNfceDto } from './dtos/response-nfce.dto';
import { ResponseBuscaNfceDto } from './dtos/response-busca-nfce.dto';
import { RequestCancelNfceDto } from './dtos/request-cancel-nfce.dto';
import { ResponseCancelNfceDto } from './dtos/response-cancel-nfce.dto';
import { RequestEmailNfceDto } from './dtos/request-email-nfce.dto';

@Injectable()
export class NfceService {
  private readonly logger = new Logger(NfceService.name);
  private readonly urlNfce;
  private readonly tokenNfce;

  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.urlNfce = this.configService.get<string>('URL_NFCE');
    this.tokenNfce = this.configService.get<string>('TOKEN_NFCE');
  }

  private async getAccessToken(): Promise<string> {
    return this.tokenNfce;
  }

  async createNfce(payload: RequestNfceDto): Promise<ResponseNfceDto> {
    try {
      const token = await this.getAccessToken();
      const generateChave = this.randomChave();
      const idtransaction = payload.idtransaction;
      const url = `${this.urlNfce}/nfce?ref=${generateChave}`;
      const headers = {
        Authorization: `Basic ${token}`,
      };

      payload.natureza_operacao = 'VENDA AO CONSUMIDOR';
      payload.data_emissao = new Date().toISOString();
      payload.tipo_documento = '1';
      payload.presenca_comprador = '1';
      payload.consumidor_final = '1';
      payload.finalidade_emissao = '1';
      payload.modalidade_frete = '9';
      delete payload.idtransaction;
      delete payload.idestablishment;

      const { data } = await firstValueFrom(
        this.httpService.post(url, payload, {
          headers,
        }),
      );

      const { status_sefaz, mensagem_sefaz } = data;

      if (status_sefaz >= '400') {
        this.logger.error(`Erro ao gerar cupom fiscal - ${mensagem_sefaz}`);
        throw new HttpException(
          `Erro ao gerar cupom fiscal - ${mensagem_sefaz}`,
          status_sefaz,
        );
      }

      const transaction = await this.prisma.transactions.findUnique({
        where: {
          id: idtransaction,
        },
      });

      await this.createNfceTransaction({
        idtransaction,
        idestablishment: transaction.idestablishment,
        identificador: data.ref,
        valor: Number(transaction.amount + transaction.fee),
        chave_nfce: data.chave_nfe,
        caminho_xml_nota_fiscal: data.caminho_xml_nota_fiscal,
        qrcode_url: data.qrcode_url,
        url_consulta_nf: data.url_consulta_nf,
        caminho_danfe: data.caminho_danfe,
        numero: Number(data.numero),
        serie: Number(data.serie),
        mensagem_sefaz: data.mensagem_sefaz,
        status_sefaz: Number(data.status_sefaz),
        status: data.status,
        created_date: new Date().toISOString(),
        updated_date: new Date().toISOString(),
      });

      this.logger.log(`Cupom fiscal gerado com sucesso - ${data.chave_nfe}`);
      return data;
    } catch (error) {
      const errorAPI = error.response?.data?.mensagem;
      if (errorAPI) {
        this.logger.error(`${error.message} - ${errorAPI}`);
        throw new HttpException(`${error.message} - ${errorAPI}`, error.status);
      } else {
        this.logger.error(error.message);
        throw new HttpException(error.message, error.status);
      }
    }
  }

  async getNfce(ref: string): Promise<ResponseBuscaNfceDto> {
    try {
      const token = await this.getAccessToken();
      const url = `${this.urlNfce}/nfce/${ref}?completa=1`;
      const headers = {
        Authorization: `Basic ${token}`,
      };
      const { data } = await firstValueFrom(
        this.httpService.get(url, {
          headers,
        }),
      );

      this.logger.log(`Cupom fiscal encontrado - ${data.chave_nfe}`);
      return data;
    } catch (error) {
      const errorAPI = error.response?.data?.mensagem;
      if (errorAPI) {
        this.logger.error(`${error.message} - ${errorAPI}`);
        throw new HttpException(`${error.message} - ${errorAPI}`, error.status);
      } else {
        this.logger.error(error.message);
        throw new HttpException(error.message, error.status);
      }
    }
  }

  async cancelNfce(
    payload: RequestCancelNfceDto,
  ): Promise<ResponseCancelNfceDto> {
    try {
      const { motivo, ref } = payload;
      const token = await this.getAccessToken();
      const url = `${this.urlNfce}/nfce/${ref}`;
      const headers = {
        Authorization: `Basic ${token}`,
      };
      const { data } = await firstValueFrom(
        this.httpService.delete(url, {
          data: {
            justificativa: motivo,
          },
          headers,
        }),
      );

      const { status_sefaz, mensagem_sefaz } = data;

      if (status_sefaz >= '400') {
        this.logger.error(`Erro ao cancelar cupom fiscal - ${mensagem_sefaz}`);
        throw new HttpException(
          `Erro ao cancelar cupom fiscal - ${mensagem_sefaz}`,
          status_sefaz,
        );
      }

      this.logger.log(`Cupom fiscal cancelado com sucesso - ${data.chave_nfe}`);
      return data;
    } catch (error) {
      const errorAPI = error.response?.data?.mensagem;
      if (errorAPI) {
        this.logger.error(`${error.message} - ${errorAPI}`);
        throw new HttpException(`${error.message} - ${errorAPI}`, error.status);
      } else {
        this.logger.error(error.message);
        throw new HttpException(error.message, error.status);
      }
    }
  }

  async sendEmailNfce(
    payload: RequestEmailNfceDto,
  ): Promise<{ message: string }> {
    try {
      const { emails, ref } = payload;
      const token = await this.getAccessToken();
      const url = `${this.urlNfce}/nfce/${ref}/email`;
      const headers = {
        Authorization: `Basic ${token}`,
      };
      const { data } = await firstValueFrom(
        this.httpService.post(
          url,
          {
            emails,
          },
          {
            headers,
          },
        ),
      );

      const { status_sefaz, mensagem_sefaz } = data;

      if (status_sefaz >= '400') {
        this.logger.error(`Erro ao enviar dados por email - ${mensagem_sefaz}`);
        throw new HttpException(
          `Erro ao enviar dados por email - ${mensagem_sefaz}`,
          status_sefaz,
        );
      }

      this.logger.log('Dados enviados por email com sucesso');
      return {
        message: 'Dados enviados por email com sucesso',
      };
    } catch (error) {
      const errorAPI = error.response?.data?.mensagem;
      if (errorAPI) {
        this.logger.error(`${error.message} - ${errorAPI}`);
        throw new HttpException(`${error.message} - ${errorAPI}`, error.status);
      } else {
        this.logger.error(error.message);
        throw new HttpException(error.message, error.status);
      }
    }
  }

  private randomChave(): number {
    return Math.floor(Math.random() * 100000000000000);
  }

  async createNfceTransaction(payload: any): Promise<any> {
    try {
      const result = await this.prisma.nfce_transactions.create({
        data: payload,
      });

      this.logger.log(
        `Creating nfce transaction for user: ${JSON.stringify(result)}`,
      );

      return result;
    } catch (error) {
      this.logger.error(
        `Error creating nfce transaction: ${error.message}`,
        error.stack,
      );
    }
  }
}
