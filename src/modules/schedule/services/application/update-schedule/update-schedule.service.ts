import { UpdateScheduleDto } from 'src/modules/schedule/dto/update-schedule.dto';
import { Schedules } from 'src/modules/schedule/entities/schedule.entity';
import { ScheduleNotFoundException } from 'src/modules/schedule/exceptions/schedule-not-found.exception';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UpdateScheduleService {
  constructor(
    @InjectRepository(Schedules)
    private readonly scheduleRepository: Repository<Schedules>,
  ) {}

  async execute(
    updateScheduleDto: UpdateScheduleDto,
    scheduleId: string,
  ): Promise<Schedules> {
    const schedule = await this.scheduleRepository.findOne(scheduleId);
    if (!schedule) throw new ScheduleNotFoundException();

    this.scheduleRepository.merge(schedule, updateScheduleDto);

    return this.scheduleRepository.save(schedule);
  }
}
