import { IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
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
}
