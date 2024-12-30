import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsDate,
  IsOptional,
} from 'class-validator';

export class TransactionDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  created_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  fee: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  channel: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ticket: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  idpaymenttype: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  idparent: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  idstudent: number;

  @ApiProperty()
  @IsNumber()
  idemployee: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  iduser: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  idestablishment: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  pending: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  paid: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  integrationid: string;

  @ApiProperty()
  @IsString()
  received_json: string;

  @ApiProperty()
  @IsString()
  sent_json: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  saleid: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  saleidi: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  payid?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  paymentid?: string;
}
