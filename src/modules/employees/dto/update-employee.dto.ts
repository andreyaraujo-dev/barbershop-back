import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  birthDate?: string;

  @ApiProperty()
  @IsString()
  office: string;

  @ApiProperty()
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  wage?: number;

  @ApiProperty()
  @IsArray()
  specialties: string[];

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email?: string;
}
