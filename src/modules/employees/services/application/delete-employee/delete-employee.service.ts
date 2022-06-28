import { EmployeesEntity } from 'src/modules/employees/entities/employees.entity';
import { EmployeeNotFoundException } from 'src/modules/employees/exceptions/employee-not-found.exception';
import { DeleteResult, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeleteEmployeeService {
  constructor(
    @InjectRepository(EmployeesEntity)
    private readonly employeeRepository: Repository<EmployeesEntity>,
  ) {}

  async execute(id: string): Promise<DeleteResult> {
    const employee = await this.employeeRepository.findOne(id);
    if (!employee) throw new EmployeeNotFoundException();

    return this.employeeRepository.delete(id);
  }
}
