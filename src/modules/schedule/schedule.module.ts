import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Schedules } from './entities/schedule.entity';
import { ScheduleController } from './schedule.controller';
import { CreateScheduleService } from './services/application/create-schedule/create-schedule.service';

@Module({
  imports: [TypeOrmModule.forFeature([Schedules])],
  providers: [CreateScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
