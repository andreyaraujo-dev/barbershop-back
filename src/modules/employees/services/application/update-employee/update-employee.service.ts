import { UpdateEmployeeDto } from 'src/modules/employees/dto/update-employee.dto';
import { EmployeesEntity } from 'src/modules/employees/entities/employees.entity';
import { EmployeeNotFoundException } from 'src/modules/employees/exceptions/employee-not-found.exception';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UpdateEmployeeService {
  constructor(
    @InjectRepository(EmployeesEntity)
    private readonly employeeRepository: Repository<EmployeesEntity>,
  ) {}

  async execute(
    updateEmployeeDto: UpdateEmployeeDto,
    id: string,
  ): Promise<EmployeesEntity> {
    const employee = await this.employeeRepository.findOne(id);
    if (!employee) throw new EmployeeNotFoundException();

    this.employeeRepository.merge(employee, updateEmployeeDto);

    return this.employeeRepository.save(employee);
  }
}
