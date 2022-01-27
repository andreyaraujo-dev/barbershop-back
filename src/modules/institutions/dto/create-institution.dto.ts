import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateInstitutionDto {
  @ApiProperty()
  @IsString()
  @IsUUID()
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string;

  @ApiPropertyOptional()
  @IsOptional()
  facilities: string;

  @ApiPropertyOptional()
  @IsOptional()
  payments_methods: string;

  @ApiPropertyOptional()
  @IsOptional()
  opening_hours: string;
}
