import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Schedules } from './entities/schedule.entity';
import { ScheduleController } from './schedule.controller';
import { CancelScheduleService } from './services/application/cancel-schedule/cancel-schedule.service';
import { CreateScheduleService } from './services/application/create-schedule/create-schedule.service';
import { FinishScheduleService } from './services/application/finish-schedule/finish-schedule.service';
import { GetAllSchedulesService } from './services/application/get-all-schedules/get-all-schedules.service';
import { UpdateScheduleService } from './services/application/update-schedule/update-schedule.service';

@Module({
  imports: [TypeOrmModule.forFeature([Schedules])],
  providers: [
    CreateScheduleService,
    UpdateScheduleService,
    FinishScheduleService,
    CancelScheduleService,
    GetAllSchedulesService,
  ],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
