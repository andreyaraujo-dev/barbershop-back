import { IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ description: 'Primeiro nome do usuário', required: false })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ description: 'Segundo nome do usuário', required: false })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ description: 'Data de aniversário', required: false })
  @IsString()
  @IsOptional()
  birthDate?: Date;

  @ApiProperty({ description: 'Telefone do usuário', required: false })
  @IsString()
  @IsOptional()
  phone?: string;
}
