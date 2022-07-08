import { Links, Meta } from 'src/modules/services/dto/list-services-result.dto';

import { ApiProperty } from '@nestjs/swagger';

import { Schedules } from '../entities/schedule.entity';
import { UpdatedScheduleDto } from './updated-schedule.dto';

export class GetAllSchedulesDto {
  @ApiProperty({ type: [UpdatedScheduleDto] })
  items: Schedules[];

  @ApiProperty({ type: Meta })
  meta: Meta;

  @ApiProperty({ type: Links })
  links: Links;
}
