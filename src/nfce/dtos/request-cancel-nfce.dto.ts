import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RequestCancelNfceDto {
  @ApiProperty({
    description: 'Justificativa para a ação solicitada',
  })
  @IsNotEmpty()
  @IsString()
  motivo: string;

  @ApiProperty({
    description: 'Referência da NFC-e',
  })
  @IsOptional()
  @IsString()
  ref?: string;
}
