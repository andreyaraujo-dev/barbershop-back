import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsNumber()
  duration: number;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsUUID()
  institutionId: string;
}
