import { ApiProperty } from '@nestjs/swagger';

export class ResponseEmailNfceDto {
  @ApiProperty({
    description: 'Código do status retornado pela SEFAZ',
  })
  status_sefaz: string;

  @ApiProperty({
    description: 'Mensagem detalhada da SEFAZ',
  })
  mensagem_sefaz: string;

  @ApiProperty({
    description: 'Série do documento fiscal inutilizado',
  })
  serie: string;

  @ApiProperty({
    description: 'Número inicial do intervalo inutilizado',
  })
  numero_inicial: string;

  @ApiProperty({
    description: 'Número final do intervalo inutilizado',
  })
  numero_final: string;

  @ApiProperty({
    description: 'Modelo do documento fiscal',
  })
  modelo: string;

  @ApiProperty({
    description: 'CNPJ do emitente responsável pela inutilização',
  })
  cnpj: string;

  @ApiProperty({
    description: 'Status da inutilização',
  })
  status: string;

  @ApiProperty({
    description: 'Caminho do arquivo XML de inutilização',
  })
  caminho_xml: string;
}
