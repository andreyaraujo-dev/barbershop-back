import { IsBoolean, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreatedScheduleDto {
  @ApiProperty({ description: 'ID da agenda', type: 'uuid' })
  id: string;

  @ApiProperty({ description: 'Id do Usuário' })
  @IsString()
  userId: string;

  @ApiProperty({ description: 'Id do funcionário' })
  @IsString()
  employeeId: string;

  @ApiProperty({ description: 'Id da instituição' })
  @IsString()
  institutionId: string;

  @ApiProperty({ description: 'Id do serviço' })
  @IsString()
  serviceId: string;

  @ApiProperty({ description: 'Data da agenda' })
  @IsString()
  scheduleDate: Date;

  @ApiProperty({ description: 'Método de pagamento' })
  @IsString()
  paymentMethod: string;

  @ApiProperty({ description: 'Diz se a agenda já foi finalizada' })
  @IsBoolean()
  finished: boolean;

  @ApiProperty({ description: 'Diz se a agenda foi cancelada' })
  @IsBoolean()
  canceled: boolean;

  @ApiProperty({ description: 'Data de criação' })
  createdAt?: Date;

  @ApiProperty({ description: 'Data de atualização' })
  updatedAt?: Date;
}
