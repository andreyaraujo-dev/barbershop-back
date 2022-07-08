import { Schedules } from 'src/modules/schedule/entities/schedule.entity';
import { ScheduleAlreadyCanceledException } from 'src/modules/schedule/exceptions/schedule-already-canceled.exception';
import { ScheduleAlreadyFinishedException } from 'src/modules/schedule/exceptions/schedule-already-finished.exception';
import { ScheduleNotFoundException } from 'src/modules/schedule/exceptions/schedule-not-found.exception';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CancelScheduleService {
  constructor(
    @InjectRepository(Schedules)
    private readonly scheduleRepository: Repository<Schedules>,
  ) {}

  async execute(scheduleId: string): Promise<Schedules> {
    const schedule = await this.scheduleRepository.findOne(scheduleId);
    if (!schedule) throw new ScheduleNotFoundException();
    if (schedule.finished) throw new ScheduleAlreadyFinishedException();
    if (schedule.canceled) throw new ScheduleAlreadyCanceledException();

    schedule.canceled = true;

    return this.scheduleRepository.save(schedule);
  }
}
