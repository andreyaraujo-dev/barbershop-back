import { Pagination } from 'nestjs-typeorm-paginate';

import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { CreateEmployeeDto } from './dto/create-employee.dto';
import { CreatedEmployeeDto } from './dto/created-employee.dto';
import { EmployeesEntity } from './entities/employees.entity';
import { CreateEmployeeService } from './services/application/create-employee/create-employee.service';
import { FindEmployeeByIdService } from './services/application/find-employee-by-id/find-employee-by-id.service';
import { ListAllEmployeesService } from './services/application/list-all-employees/list-all-employees.service';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly createEmployeeService: CreateEmployeeService,
    private readonly listAllEmployeesService: ListAllEmployeesService,
    private readonly findEmployeeByIdService: FindEmployeeByIdService,
  ) {}

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

  @Get()
  @ApiOkResponse({
    description: 'Listagem feita com sucesso',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a listagem',
  })
  @ApiQuery({
    description: 'Id da instituição do funcionário',
    required: false,
    name: 'institutionId',
    type: 'string',
  })
  @ApiQuery({
    description: 'Pagina',
    required: false,
    name: 'page',
    type: 'number',
  })
  @ApiQuery({
    description: 'Limite de registros listados',
    required: false,
    name: 'limit',
    type: 'number',
  })
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('institutionId') institutionId: string,
  ): Promise<Pagination<EmployeesEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.listAllEmployeesService.execute(
      {
        page,
        limit,
        route: '/employees',
      },
      institutionId,
    );
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Pesquisa feita com sucesso',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a listagem',
  })
  @ApiParam({
    description: 'Id do funcionario',
    name: 'id',
  })
  async findById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<EmployeesEntity> {
    return this.findEmployeeByIdService.execute(id);
  }
}
