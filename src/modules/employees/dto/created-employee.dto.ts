import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatedEmployeeDto {
  @ApiProperty({ description: 'ID do funcionário', type: 'uuid' })
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  institutionId: string;

  @ApiProperty()
  @ApiPropertyOptional()
  birthDate?: string;

  @ApiProperty()
  office: string;

  @ApiProperty()
  @ApiPropertyOptional()
  wage?: number;

  @ApiProperty({ type: 'array' })
  specialties: string[];

  @ApiProperty({ description: 'Data de criação' })
  createdAt?: Date;

  @ApiProperty({ description: 'Data de atualização' })
  updatedAt?: Date;
}
