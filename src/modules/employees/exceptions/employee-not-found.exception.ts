import { NotFoundException } from '@nestjs/common';

export class EmployeeNotFoundException extends NotFoundException {
  constructor() {
    super(
      `Dados do funcionário não encontrado`,
      EmployeeNotFoundException.name,
    );
  }
}
