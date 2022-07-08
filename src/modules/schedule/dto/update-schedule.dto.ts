import { IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateScheduleDto {
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
}
