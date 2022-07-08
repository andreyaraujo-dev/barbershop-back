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
import { CancelScheduleService } from './services/application/cancel-schedule/cancel-schedule.service';
import { CreateScheduleService } from './services/application/create-schedule/create-schedule.service';
import { FinishScheduleService } from './services/application/finish-schedule/finish-schedule.service';
import { UpdateScheduleService } from './services/application/update-schedule/update-schedule.service';

@ApiTags('Schedules')
@Controller('schedules')
export class ScheduleController {
  constructor(
    private readonly createScheduleService: CreateScheduleService,
    private readonly updateScheduleService: UpdateScheduleService,
    private readonly finishScheduleService: FinishScheduleService,
    private readonly cancelScheduleService: CancelScheduleService,
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

  @Patch('/finish/:id')
  @ApiOkResponse({ description: 'Finalização feita com sucesso' })
  @ApiParam({
    name: 'id',
    description: 'Id da agenda',
    required: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a finalização',
  })
  async finish(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Schedules> {
    return this.finishScheduleService.execute(id);
  }

  @Patch('/cancel/:id')
  @ApiOkResponse({ description: 'Cancelamento feito com sucesso' })
  @ApiParam({
    name: 'id',
    description: 'Id da agenda',
    required: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar o cancelamento',
  })
  async cancel(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Schedules> {
    return this.cancelScheduleService.execute(id);
  }
}
