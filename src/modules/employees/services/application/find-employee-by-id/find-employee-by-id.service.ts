import { EmployeesEntity } from 'src/modules/employees/entities/employees.entity';
import { EmployeeNotFoundException } from 'src/modules/employees/exceptions/employee-not-found.exception';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindEmployeeByIdService {
  constructor(
    @InjectRepository(EmployeesEntity)
    private readonly employeeRepository: Repository<EmployeesEntity>,
  ) {}

  async execute(employeeId: string): Promise<EmployeesEntity> {
    const employee = await this.employeeRepository.findOne(employeeId, {
      relations: ['address'],
    });
    if (!employee) throw new EmployeeNotFoundException();
    return employee;
  }
}
