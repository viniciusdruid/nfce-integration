import { ApiProperty } from '@nestjs/swagger';

class ItemDto {
  @ApiProperty({ description: 'Número do item' })
  numero_item: string;

  @ApiProperty({ description: 'Código do produto' })
  codigo_produto: string;

  @ApiProperty({ description: 'Código de barras comercial' })
  codigo_barras_comercial: string;

  @ApiProperty({ description: 'Descrição do produto' })
  descricao: string;

  @ApiProperty({ description: 'Código NCM' })
  codigo_ncm: string;

  @ApiProperty({ description: 'CFOP' })
  cfop: string;

  @ApiProperty({ description: 'Unidade comercial' })
  unidade_comercial: string;

  @ApiProperty({ description: 'Quantidade comercial' })
  quantidade_comercial: string;

  @ApiProperty({ description: 'Valor unitário comercial' })
  valor_unitario_comercial: string;

  @ApiProperty({ description: 'Valor bruto' })
  valor_bruto: string;

  @ApiProperty({ description: 'ICMS origem' })
  icms_origem: string;

  @ApiProperty({ description: 'ICMS situação tributária' })
  icms_situacao_tributaria: string;

  @ApiProperty({ description: 'ICMS modalidade base cálculo' })
  icms_modalidade_base_calculo: string;

  @ApiProperty({ description: 'ICMS base cálculo' })
  icms_base_calculo: string;

  @ApiProperty({ description: 'ICMS alíquota' })
  icms_aliquota: string;

  @ApiProperty({ description: 'ICMS valor' })
  icms_valor: string;
}

class FormaPagamentoDto {
  @ApiProperty({ description: 'Forma de pagamento' })
  forma_pagamento: string;

  @ApiProperty({ description: 'Valor do pagamento' })
  valor_pagamento: string;

  @ApiProperty({ description: 'Tipo de integração' })
  tipo_integracao?: string | null;
}

class RequisicaoNotaFiscalDto {
  @ApiProperty({ description: 'Versão' })
  versao: string;

  @ApiProperty({ description: 'Chave da NF-e' })
  chave_nfe: string;

  @ApiProperty({ description: 'UF' })
  uf: string;

  @ApiProperty({ description: 'Natureza da operação' })
  natureza_operacao: string;

  @ApiProperty({ description: 'CNPJ emitente' })
  cnpj_emitente: string;

  @ApiProperty({ description: 'Nome do emitente' })
  nome_emitente: string;

  @ApiProperty({ description: 'Nome fantasia emitente' })
  nome_fantasia_emitente: string;

  @ApiProperty({ description: 'Itens da nota fiscal' })
  itens: ItemDto[];

  @ApiProperty({ description: 'Formas de pagamento' })
  formas_pagamento: FormaPagamentoDto[];

  @ApiProperty({ description: 'Valor total dos produtos' })
  valor_produtos: string;

  @ApiProperty({ description: 'Valor total da nota fiscal' })
  valor_total: string;

  @ApiProperty({ description: 'Modalidade de frete' })
  modalidade_frete: string;

  @ApiProperty({ description: 'Informações adicionais do contribuinte' })
  informacoes_adicionais_contribuinte: string;
}

class ProtocoloNotaFiscalDto {
  @ApiProperty({ description: 'Versão' })
  versao: string;

  @ApiProperty({ description: 'Ambiente' })
  ambiente: string;

  @ApiProperty({ description: 'Chave da NF-e' })
  chave_nfe: string;

  @ApiProperty({ description: 'Data de recebimento' })
  data_recebimento: string;

  @ApiProperty({ description: 'Número do protocolo' })
  numero_protocolo: string;

  @ApiProperty({ description: 'Digest value' })
  digest_value: string;

  @ApiProperty({ description: 'Status' })
  status: string;

  @ApiProperty({ description: 'Motivo' })
  motivo: string;
}

export class ResponseBuscaNfceDto {
  @ApiProperty({ description: 'CNPJ do emitente' })
  cnpj_emitente: string;

  @ApiProperty({ description: 'Referência' })
  ref: string;

  @ApiProperty({ description: 'Status da NF-e' })
  status: string;

  @ApiProperty({ description: 'Status da SEFAZ' })
  status_sefaz: string;

  @ApiProperty({ description: 'Mensagem da SEFAZ' })
  mensagem_sefaz: string;

  @ApiProperty({ description: 'Chave da NF-e' })
  chave_nfe: string;

  @ApiProperty({ description: 'Número da NF-e' })
  numero: string;

  @ApiProperty({ description: 'Série da NF-e' })
  serie: string;

  @ApiProperty({ description: 'Protocolo da NF-e' })
  protocolo: string;

  @ApiProperty({ description: 'Caminho do XML da NF-e' })
  caminho_xml_nota_fiscal: string;

  @ApiProperty({ description: 'Caminho do DANFE' })
  caminho_danfe: string;

  @ApiProperty({ description: 'URL do QR Code' })
  qrcode_url: string;

  @ApiProperty({ description: 'URL de consulta da NF-e' })
  url_consulta_nf: string;

  @ApiProperty({ description: 'Requisição da nota fiscal' })
  requisicao_nota_fiscal: RequisicaoNotaFiscalDto;

  @ApiProperty({ description: 'Protocolo da nota fiscal' })
  protocolo_nota_fiscal: ProtocoloNotaFiscalDto;
}
