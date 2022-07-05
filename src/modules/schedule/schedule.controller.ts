import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateScheduleDto } from './dto/create-schedule.dto';
import { CreatedScheduleDto } from './dto/created-schedule.dto';
import { CreateScheduleService } from './services/application/create-schedule/create-schedule.service';

@ApiTags('Schedules')
@Controller('schedules')
export class ScheduleController {
  constructor(private readonly createScheduleService: CreateScheduleService) {}

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
  async create(@Body() body: CreateScheduleDto): Promise<CreatedScheduleDto> {
    return this.createScheduleService.execute(body);
  }
}
