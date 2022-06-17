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
  paymentsMethods: string;

  @ApiPropertyOptional()
  @IsOptional()
  openingHours: string;
}
