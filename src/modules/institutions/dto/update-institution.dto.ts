import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'Endereço da instituição', required: false })
  @IsString()
  @IsOptional()
  addressId?: string;
}
