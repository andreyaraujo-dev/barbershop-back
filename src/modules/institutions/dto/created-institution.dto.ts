import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatedInstitutionDto {
  @ApiProperty({ description: 'ID da barbearia', type: 'uuid' })
  id: string;

  @ApiProperty({ description: 'Nome da barbearia' })
  name: string;

  @ApiPropertyOptional({
    description: 'Descrição da barbearia',
    required: false,
  })
  description?: string;

  @ApiPropertyOptional({
    description: 'Facilidades da barbearia',
    required: false,
  })
  facilities?: string;

  @ApiPropertyOptional({ description: 'Métodos de pagamento', required: false })
  paymentsMethods?: string;

  @ApiPropertyOptional({
    description: 'Horário de funcionamento',
    required: false,
  })
  openingHours?: string;

  @ApiProperty({ description: 'Data de criação' })
  createdAt: Date;

  @ApiProperty({ description: 'Data de atualização' })
  updatedAt: Date;
}
