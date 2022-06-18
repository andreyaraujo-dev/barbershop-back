import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateServiceDto {
  @ApiProperty({ description: 'Nome' })
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Descrição' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Duração' })
  @IsNumber()
  @IsOptional()
  duration?: number;

  @ApiProperty({ description: 'Preço do serviço' })
  @IsNumber()
  @IsOptional()
  price?: number;
}
