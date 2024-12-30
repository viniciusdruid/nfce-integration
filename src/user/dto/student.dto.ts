import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsDate,
} from 'class-validator';

export class StudentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  photo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  card: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  idclass: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  salt: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  created_date: Date;

  @ApiProperty()
  @IsDate()
  last_login: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  login_count: number;

  @ApiProperty()
  @IsBoolean()
  canrecharge: boolean;

  @ApiProperty()
  @IsBoolean()
  active: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  idestablishment: number;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsDate()
  birthdate: Date;

  @ApiProperty()
  @IsBoolean()
  automatictopup: boolean;

  @ApiProperty()
  @IsNumber()
  min_balance: number;

  @ApiProperty()
  @IsNumber()
  topupamount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  idparent: number;

  @ApiProperty()
  @IsNumber()
  turma_description: string;

  @ApiProperty()
  @IsNumber()
  id_family: number;

  @ApiProperty()
  @IsNumber()
  taxa: number;

  @ApiProperty()
  @IsString()
  cpf: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNumber()
  curent_balance: number;
}
