import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeesController } from './employee.controller';
import { EmployeesEntity } from './entities/employees.entity';
import { CreateEmployeeService } from './services/application/create-employee/create-employee.service';
import { ListAllEmployeesService } from './services/application/list-all-employees/list-all-employees.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeesEntity])],
  controllers: [EmployeesController],
  providers: [CreateEmployeeService, ListAllEmployeesService],
  exports: [],
})
export class EmployeesModule {}
