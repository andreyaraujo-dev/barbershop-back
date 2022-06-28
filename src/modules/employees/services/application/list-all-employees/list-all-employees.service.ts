import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { EmployeesEntity } from 'src/modules/employees/entities/employees.entity';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ListAllEmployeesService {
  constructor(
    @InjectRepository(EmployeesEntity)
    private readonly employeeRepository: Repository<EmployeesEntity>,
  ) {}

  async execute(
    options: IPaginationOptions,
    institutionId?: string,
  ): Promise<Pagination<EmployeesEntity>> {
    return paginate<EmployeesEntity>(
      this.employeeRepository,
      options,
      institutionId && {
        where: { institutionId },
      },
    );
  }
}
