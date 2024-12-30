import {
  Controller,
  Post,
  Body,
  UseGuards,
  Param,
  Get,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { NfceService } from './nfce.service';
import { RequestNfceDto } from './dtos/request-nfce.dto';
import { ResponseNfceDto } from './dtos/response-nfce.dto';
import { ResponseBuscaNfceDto } from './dtos/response-busca-nfce.dto';
import { RequestCancelNfceDto } from './dtos/request-cancel-nfce.dto';
import { ResponseCancelNfceDto } from './dtos/response-cancel-nfce.dto';
import { RequestEmailNfceDto } from './dtos/request-email-nfce.dto';

@ApiTags('Nfce')
@Controller('nfce')
export class NfceController {
  constructor(private readonly nfceService: NfceService) {}

  @UseGuards(AuthGuard())
  @Post('generate')
  @ApiResponse({
    status: 201,
    description: 'Cupom fiscal gerado com sucesso.',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao gerar cupom fiscal.',
  })
  @ApiBody({
    type: RequestNfceDto,
  })
  async generateCupomFiscal(
    @Body() payload: RequestNfceDto,
  ): Promise<ResponseNfceDto> {
    return await this.nfceService.createNfce(payload);
  }

  @UseGuards(AuthGuard())
  @Get(':ref')
  @ApiResponse({
    status: 200,
    description: 'Cupom fiscal encontrado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Cupom fiscal não encontrado.',
  })
  async getNfceByRef(@Param('ref') ref: string): Promise<ResponseBuscaNfceDto> {
    return await this.nfceService.getNfce(ref);
  }

  @UseGuards(AuthGuard())
  @Delete(':ref')
  @ApiResponse({
    status: 200,
    description: 'Cupom fiscal cancelado com sucesso.',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao cancelar cupom fiscal.',
  })
  async cancelNfce(
    @Param('ref') ref: string,
    @Body() payload: RequestCancelNfceDto,
  ): Promise<ResponseCancelNfceDto> {
    const data = {
      ...payload,
      ref,
    } as RequestCancelNfceDto;
    return await this.nfceService.cancelNfce(data);
  }

  @UseGuards(AuthGuard())
  @Post(':ref/email')
  @ApiResponse({
    status: 200,
    description: 'Email enviado com sucesso.',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao enviar email.',
  })
  async sendEmailNfce(
    @Param('ref') ref: string,
    @Body() payload: RequestEmailNfceDto,
  ): Promise<{ message: string }> {
    const data = {
      ...payload,
      ref,
    };

    return await this.nfceService.sendEmailNfce(data);
  }
}
