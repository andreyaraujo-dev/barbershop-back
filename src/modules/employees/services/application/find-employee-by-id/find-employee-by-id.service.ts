import { EmployeesEntity } from 'src/modules/employees/entities/employees.entity';
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
    return this.employeeRepository.findOne(employeeId);
  }
}
