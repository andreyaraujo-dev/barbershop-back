import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateInstitutionDto {
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
