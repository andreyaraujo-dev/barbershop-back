import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty({ description: 'Nome do serviço', required: true })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Descrição do serviço', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Duração do serviço', required: true })
  @IsNumber()
  duration: number;

  @ApiProperty({ description: 'Preço do serviço', required: true })
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'Id da instituição do serviço', required: true })
  @IsUUID()
  institutionId: string;
}
