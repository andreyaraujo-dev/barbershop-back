import { CreateScheduleDto } from 'src/modules/schedule/dto/create-schedule.dto';
import { Schedules } from 'src/modules/schedule/entities/schedule.entity';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateScheduleService {
  constructor(
    @InjectRepository(Schedules)
    private readonly scheduleRepository: Repository<Schedules>,
  ) {}

  async execute(createScheduleDto: CreateScheduleDto): Promise<Schedules> {
    const schedule = this.scheduleRepository.create(createScheduleDto);
    return this.scheduleRepository.save(schedule);
  }
}
