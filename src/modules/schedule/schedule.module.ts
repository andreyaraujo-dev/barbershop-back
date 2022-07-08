import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Schedules } from './entities/schedule.entity';
import { ScheduleController } from './schedule.controller';
import { CancelScheduleService } from './services/application/cancel-schedule/cancel-schedule.service';
import { CreateScheduleService } from './services/application/create-schedule/create-schedule.service';
import { FinishScheduleService } from './services/application/finish-schedule/finish-schedule.service';
import { UpdateScheduleService } from './services/application/update-schedule/update-schedule.service';

@Module({
  imports: [TypeOrmModule.forFeature([Schedules])],
  providers: [
    CreateScheduleService,
    UpdateScheduleService,
    FinishScheduleService,
    CancelScheduleService,
  ],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
