import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

class ItemDto {
  @ApiProperty({ description: 'Número do item' })
  @IsNotEmpty()
  @IsString()
  numero_item: string;

  @ApiProperty({ description: 'Código NCM do produto' })
  @IsNotEmpty()
  @IsString()
  codigo_ncm: string;

  @ApiProperty({ description: 'Código do produto' })
  @IsNotEmpty()
  @IsString()
  codigo_produto: string;

  @ApiProperty({ description: 'Descrição do produto' })
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @ApiProperty({ description: 'Quantidade comercial' })
  @IsNotEmpty()
  @IsString()
  quantidade_comercial: string;

  @ApiProperty({ description: 'Quantidade tributável' })
  @IsNotEmpty()
  @IsString()
  quantidade_tributavel: string;

  @ApiProperty({ description: 'CFOP' })
  @IsNotEmpty()
  @IsString()
  cfop: string;

  @ApiProperty({ description: 'Valor unitário comercial' })
  @IsNotEmpty()
  @IsString()
  valor_unitario_comercial: string;

  @ApiProperty({ description: 'Valor unitário tributável' })
  @IsNotEmpty()
  @IsString()
  valor_unitario_tributavel: string;

  @ApiProperty({ description: 'Valor bruto' })
  @IsNotEmpty()
  @IsString()
  valor_bruto: string;

  @ApiProperty({ description: 'Unidade comercial' })
  @IsNotEmpty()
  @IsString()
  unidade_comercial: string;

  @ApiProperty({ description: 'Unidade tributável' })
  @IsNotEmpty()
  @IsString()
  unidade_tributavel: string;

  @ApiProperty({ description: 'Origem do ICMS' })
  @IsNotEmpty()
  @IsString()
  icms_origem: string;

  @ApiProperty({ description: 'Situação tributária do ICMS' })
  @IsNotEmpty()
  @IsString()
  icms_situacao_tributaria: string;

  @ApiProperty({ description: 'Alíquota do ICMS' })
  @IsOptional()
  @IsString()
  icms_aliquota?: string;

  @ApiProperty({ description: 'Base de cálculo do ICMS' })
  @IsOptional()
  @IsString()
  icms_base_calculo?: string;

  @ApiProperty({ description: 'Modalidade da base de cálculo do ICMS' })
  @IsOptional()
  @IsString()
  icms_modalidade_base_calculo?: string;
}

class FormaPagamentoDto {
  @ApiProperty({ description: 'Forma de pagamento' })
  @IsNotEmpty()
  @IsString()
  forma_pagamento: string;

  @ApiProperty({ description: 'Valor do pagamento' })
  @IsNotEmpty()
  @IsString()
  valor_pagamento: string;
}

export class RequestNfceDto {
  @ApiProperty({ description: 'Número da transação', required: false })
  @IsOptional()
  idtransaction?: number;

  @ApiProperty({ description: 'Número do estabelecimento', required: false })
  @IsOptional()
  idestablishment?: number;

  @ApiProperty({ description: 'Natureza da operação', required: false })
  @IsString()
  @IsOptional()
  natureza_operacao?: string;

  @ApiProperty({ description: 'Data de emissão' })
  @IsOptional()
  @IsDateString()
  data_emissao?: string;

  @ApiProperty({ description: 'Tipo de documento' })
  @IsOptional()
  @IsString()
  tipo_documento?: string;

  @ApiProperty({ description: 'Presença do comprador' })
  @IsOptional()
  @IsString()
  presenca_comprador?: string;

  @ApiProperty({ description: 'Consumidor final' })
  @IsOptional()
  @IsString()
  consumidor_final?: string;

  @ApiProperty({ description: 'Finalidade de emissão' })
  @IsOptional()
  @IsString()
  finalidade_emissao?: string;

  @ApiProperty({ description: 'CNPJ do emitente' })
  @IsOptional()
  @IsString()
  cnpj_emitente?: string;

  @ApiProperty({ description: 'Nome do destinatário', required: false })
  @IsOptional()
  @IsString()
  nome_destinatario?: string;

  @ApiProperty({ description: 'CPF do destinatário', required: false })
  @IsOptional()
  @IsString()
  cpf_destinatario?: string;

  @ApiProperty({
    description: 'Informações adicionais ao contribuinte',
    required: false,
  })
  @IsOptional()
  @IsString()
  informacoes_adicionais_contribuinte?: string;

  @ApiProperty({ description: 'Valor dos produtos' })
  @IsOptional()
  @IsString()
  valor_produtos?: string;

  @ApiProperty({ description: 'Valor do desconto' })
  @IsOptional()
  @IsString()
  valor_desconto?: string;

  @ApiProperty({ description: 'Valor total' })
  @IsOptional()
  @IsString()
  valor_total?: string;

  @ApiProperty({ description: 'Forma de pagamento' })
  @IsOptional()
  @IsString()
  forma_pagamento?: string;

  @ApiProperty({ description: 'Valor total do ICMS' })
  @IsOptional()
  @IsString()
  icms_valor_total?: string;

  @ApiProperty({ description: 'Modalidade de frete' })
  @IsOptional()
  @IsString()
  modalidade_frete?: string;

  @ApiProperty({ description: 'Itens da nota fiscal' })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items: ItemDto[];

  @ApiProperty({ description: 'Formas de pagamento' })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FormaPagamentoDto)
  formas_pagamento: FormaPagamentoDto[];
}
