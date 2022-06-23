import { ApiProperty } from '@nestjs/swagger';

export class CreatedServiceDto {
  @ApiProperty({ description: 'ID' })
  id: string;

  @ApiProperty({ description: 'Nome' })
  name: string;

  @ApiProperty({ description: 'Descrição' })
  description?: string;

  @ApiProperty({ description: 'Duração' })
  duration: number;

  @ApiProperty({ description: 'Preço do serviço' })
  price: number;

  @ApiProperty({ description: 'ID da instituição' })
  institutionId: string;

  @ApiProperty({ description: 'Data de criação' })
  createdAt: Date;

  @ApiProperty({ description: 'Data de atualização' })
  updatedAt: Date;
}
