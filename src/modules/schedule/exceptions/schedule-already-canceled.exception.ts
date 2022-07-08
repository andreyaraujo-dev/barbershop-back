import { BadRequestException } from '@nestjs/common';

export class ScheduleAlreadyCanceledException extends BadRequestException {
  constructor() {
    super('Agenda já foi cancelada!');
  }
}
