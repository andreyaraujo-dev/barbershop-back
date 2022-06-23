import { ApiProperty } from '@nestjs/swagger';

export class UpdatedServiceDto {
  @ApiProperty({ description: 'Id do registro', type: 'string' })
  id: string;

  @ApiProperty({ description: 'Nome', type: 'string' })
  name: string;

  @ApiProperty({ description: 'Descrição', type: 'string' })
  description: string;

  @ApiProperty({ description: 'Duração', type: 'number' })
  duration: number;

  @ApiProperty({ description: 'Preço do serviço', type: 'number' })
  price: number;
}
