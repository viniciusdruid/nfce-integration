import { ApiProperty } from '@nestjs/swagger';

export class ResponseNfceDto {
  @ApiProperty({ description: 'CNPJ do emitente' })
  cnpj_emitente: string;

  @ApiProperty({ description: 'Referência da nota fiscal' })
  ref: string;

  @ApiProperty({ description: 'Status da nota fiscal' })
  status: string;

  @ApiProperty({ description: 'Código do status retornado pela SEFAZ' })
  status_sefaz: string;

  @ApiProperty({ description: 'Mensagem detalhada da SEFAZ' })
  mensagem_sefaz: string;

  @ApiProperty({ description: 'Chave de acesso da nota fiscal' })
  chave_nfe: string;

  @ApiProperty({ description: 'Número da nota fiscal' })
  numero: string;

  @ApiProperty({ description: 'Série da nota fiscal' })
  serie: string;

  @ApiProperty({ description: 'Número do protocolo de autorização' })
  protocolo: string;

  @ApiProperty({ description: 'Caminho do arquivo XML da nota fiscal' })
  caminho_xml_nota_fiscal: string;

  @ApiProperty({
    description:
      'Caminho do arquivo DANFE (Documento Auxiliar da Nota Fiscal Eletrônica)',
  })
  caminho_danfe: string;

  @ApiProperty({ description: 'URL do QR Code para consulta da nota fiscal' })
  qrcode_url: string;

  @ApiProperty({ description: 'URL para consulta da nota fiscal na SEFAZ' })
  url_consulta_nf: string;
}
