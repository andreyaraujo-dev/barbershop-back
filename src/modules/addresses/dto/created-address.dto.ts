import { ApiProperty } from '@nestjs/swagger';

export class CreatedAddressDto {
  @ApiProperty({ description: 'ID do endereço', type: 'uuid' })
  id: string;

  @ApiProperty({ name: 'Nome da Rua' })
  street: string;

  @ApiProperty({ name: 'Nome da Bairro' })
  district: string;

  @ApiProperty({ name: 'Número da casa' })
  houseNumber: string;

  @ApiProperty({ name: 'UF' })
  uf: string;

  @ApiProperty({ name: 'CEP' })
  zipCode: string;

  @ApiProperty({ name: 'Complemento' })
  complement?: string;

  @ApiProperty({ description: 'Data de criação' })
  createdAt?: Date;

  @ApiProperty({ description: 'Data de atualização' })
  updatedAt?: Date;
}
