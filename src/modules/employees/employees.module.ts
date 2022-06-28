import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeesController } from './employee.controller';
import { EmployeesEntity } from './entities/employees.entity';
import { CreateEmployeeService } from './services/application/create-employee/create-employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeesEntity])],
  controllers: [EmployeesController],
  providers: [CreateEmployeeService],
  exports: [],
})
export class EmployeesModule {}
