import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class RequestEmailNfceDto {
  @ApiProperty({
    description: 'Emails para envio de dados da NFC-e',
    type: [String],
  })
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  emails: string[];

  @ApiProperty({
    description: 'Referência da NFC-e',
  })
  @IsOptional()
  @IsString()
  ref?: string;
}
