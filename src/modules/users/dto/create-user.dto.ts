import { IsBoolean, IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Primeiro nome do usuário', required: true })
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'Segundo nome do usuário', required: true })
  @IsString()
  lastName: string;

  @ApiProperty({ description: 'Data de aniversário', required: false })
  @IsString()
  @IsOptional()
  birthDate?: Date;

  @ApiProperty({ description: 'Instituição do usuário', required: false })
  @IsString()
  @IsOptional()
  institutionId?: string;

  @ApiProperty({ description: 'Diz se o usuário é admin', required: true })
  @IsBoolean()
  isAdmin: boolean;

  @ApiProperty({ description: 'Senha do usuário', required: true })
  @IsString()
  password: string;
}
