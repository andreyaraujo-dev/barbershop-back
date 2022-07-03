import { ApiProperty } from '@nestjs/swagger';

export class CreatedUserDto {
  @ApiProperty({ description: 'ID' })
  id: string;

  @ApiProperty({ description: 'Primeiro nome do usuário', required: true })
  firstName: string;

  @ApiProperty({ description: 'Segundo nome do usuário', required: true })
  lastName: string;

  @ApiProperty({ description: 'Data de aniversário', required: false })
  birthDate?: Date;

  @ApiProperty({ description: 'Instituição do usuário', required: false })
  institutionId?: string;

  @ApiProperty({ description: 'Diz se o usuário é admin', required: true })
  isAdmin: boolean;

  @ApiProperty({ description: 'Senha do usuário', required: true })
  password: string;

  @ApiProperty({ description: 'Data de criação' })
  createdAt: Date;

  @ApiProperty({ description: 'Data de atualização' })
  updatedAt: Date;
}
