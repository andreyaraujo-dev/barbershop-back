import { Schedules } from 'src/modules/schedule/entities/schedule.entity';
import { ScheduleAlreadyFinishedException } from 'src/modules/schedule/exceptions/schedule-already-finished.exception';
import { ScheduleNotFoundException } from 'src/modules/schedule/exceptions/schedule-not-found.exception';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FinishScheduleService {
  constructor(
    @InjectRepository(Schedules)
    private readonly scheduleRepository: Repository<Schedules>,
  ) {}

  async execute(scheduleId: string): Promise<Schedules> {
    const schedule = await this.scheduleRepository.findOne(scheduleId);
    if (!schedule) throw new ScheduleNotFoundException();
    if (schedule.finished) throw new ScheduleAlreadyFinishedException();

    schedule.finished = true;

    return this.scheduleRepository.save(schedule);
  }
}
