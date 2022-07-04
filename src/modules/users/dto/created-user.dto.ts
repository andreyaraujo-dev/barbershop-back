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

  @ApiProperty({ description: 'Data de criação' })
  createdAt: Date;

  @ApiProperty({ description: 'Data de atualização' })
  updatedAt: Date;

  @ApiProperty({ description: 'Telefone do usuário', required: true })
  phone: string;

  @ApiProperty({ description: 'E-mail do usuário', required: true })
  email: string;
}
