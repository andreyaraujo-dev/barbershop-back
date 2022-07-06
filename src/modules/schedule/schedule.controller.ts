import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { CreateScheduleDto } from './dto/create-schedule.dto';
import { CreatedScheduleDto } from './dto/created-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedules } from './entities/schedule.entity';
import { CreateScheduleService } from './services/application/create-schedule/create-schedule.service';
import { UpdateScheduleService } from './services/application/update-schedule/update-schedule.service';

@ApiTags('Schedules')
@Controller('schedules')
export class ScheduleController {
  constructor(
    private readonly createScheduleService: CreateScheduleService,
    private readonly updateScheduleService: UpdateScheduleService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Funcionário registrado com sucesso',
    type: CreatedScheduleDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a criação',
  })
  @ApiBody({
    description: 'Body para fazer a requisição',
    type: CreateScheduleDto,
  })
  async create(@Body() body: CreateScheduleDto): Promise<CreatedScheduleDto> {
    return this.createScheduleService.execute(body);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Atualização feita com sucesso' })
  @ApiParam({
    name: 'id',
    description: 'Id da agenda',
    required: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a atualização',
  })
  @ApiBody({
    description: 'Body para fazer a requisição',
    type: UpdateScheduleDto,
  })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateScheduleDto,
  ): Promise<Schedules> {
    return this.updateScheduleService.execute(body, id);
  }
}
