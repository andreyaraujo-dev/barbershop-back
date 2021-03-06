import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  institutionId: string;

  @ApiProperty()
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  birthDate?: string;

  @ApiProperty()
  @IsString()
  office: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  wage?: number;

  @ApiProperty()
  @IsArray()
  specialties: string[];
}
