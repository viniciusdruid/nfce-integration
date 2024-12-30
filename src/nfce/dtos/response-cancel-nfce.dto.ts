import { ApiProperty } from '@nestjs/swagger';

export class ResponseCancelNfceDto {
  @ApiProperty({
    description: 'Código do status retornado pela SEFAZ',
  })
  status_sefaz: string;

  @ApiProperty({
    description: 'Mensagem detalhada da SEFAZ',
  })
  mensagem_sefaz: string;

  @ApiProperty({
    description: 'Status atual da NF-e',
  })
  status: string;

  @ApiProperty({
    description:
      'Caminho do DANFE (Documento Auxiliar da Nota Fiscal Eletrônica)',
    nullable: true,
  })
  caminho_danfe: string | null;

  @ApiProperty({
    description: 'Caminho do arquivo XML de cancelamento',
  })
  caminho_xml_cancelamento: string;

  @ApiProperty({
    description: 'Número do protocolo do evento',
  })
  numero_protocolo: string;
}
