import { BadRequestException } from '@nestjs/common';

export class ScheduleAlreadyFinishedException extends BadRequestException {
  constructor() {
    super('Agenda já foi finalizada!');
  }
}
