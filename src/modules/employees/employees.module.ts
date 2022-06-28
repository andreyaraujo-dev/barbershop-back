import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeesController } from './employee.controller';
import { EmployeesEntity } from './entities/employees.entity';
import { CreateEmployeeService } from './services/application/create-employee/create-employee.service';
import { FindEmployeeByIdService } from './services/application/find-employee-by-id/find-employee-by-id.service';
import { ListAllEmployeesService } from './services/application/list-all-employees/list-all-employees.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeesEntity])],
  controllers: [EmployeesController],
  providers: [
    CreateEmployeeService,
    ListAllEmployeesService,
    FindEmployeeByIdService,
  ],
  exports: [],
})
export class EmployeesModule {}
