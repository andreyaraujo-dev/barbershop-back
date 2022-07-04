import { IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressDto {
  @ApiProperty({ name: 'Nome da Rua' })
  @IsString()
  street: string;

  @ApiProperty({ name: 'Nome da Bairro' })
  @IsString()
  district: string;

  @ApiProperty({ name: 'Número da casa' })
  @IsString()
  houseNumber: string;

  @ApiProperty({ name: 'UF' })
  @IsString()
  uf: string;

  @ApiProperty({ name: 'CEP' })
  @IsString()
  zipCode: string;

  @ApiProperty({ name: 'Complemento' })
  @IsString()
  @IsOptional()
  complement?: string;
}
