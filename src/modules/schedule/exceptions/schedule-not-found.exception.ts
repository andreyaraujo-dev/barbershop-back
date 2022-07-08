import { NotFoundException } from '@nestjs/common';

export class ScheduleNotFoundException extends NotFoundException {
  constructor() {
    super(`Dados da agenda não encontrados`, ScheduleNotFoundException.name);
  }
}
