import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateEmployeeDto } from './dto/create-employee.dto';
import { CreatedEmployeeDto } from './dto/created-employee.dto';
import { CreateEmployeeService } from './services/application/create-employee/create-employee.service';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly createEmployeeService: CreateEmployeeService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Funcionário registrado com sucesso',
    type: CreatedEmployeeDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a criação',
  })
  async create(@Body() body: CreateEmployeeDto): Promise<CreatedEmployeeDto> {
    return this.createEmployeeService.execute(body);
  }
}
