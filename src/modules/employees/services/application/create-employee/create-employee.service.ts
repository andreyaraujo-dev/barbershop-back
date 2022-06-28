import { CreateEmployeeDto } from 'src/modules/employees/dto/create-employee.dto';
import { EmployeesEntity } from 'src/modules/employees/entities/employees.entity';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateEmployeeService {
  constructor(
    @InjectRepository(EmployeesEntity)
    private readonly employeeRepository: Repository<EmployeesEntity>,
  ) {}

  async execute(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeesEntity> {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee);
  }
}
