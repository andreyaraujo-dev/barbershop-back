import { Pagination } from 'nestjs-typeorm-paginate';

import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { CreateScheduleDto } from './dto/create-schedule.dto';
import { CreatedScheduleDto } from './dto/created-schedule.dto';
import { GetAllSchedulesDto } from './dto/get-all-schedules.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedules } from './entities/schedule.entity';
import { CancelScheduleService } from './services/application/cancel-schedule/cancel-schedule.service';
import { CreateScheduleService } from './services/application/create-schedule/create-schedule.service';
import { FinishScheduleService } from './services/application/finish-schedule/finish-schedule.service';
import { GetAllSchedulesService } from './services/application/get-all-schedules/get-all-schedules.service';
import { UpdateScheduleService } from './services/application/update-schedule/update-schedule.service';

@ApiTags('Schedules')
@Controller('schedules')
export class ScheduleController {
  constructor(
    private readonly createScheduleService: CreateScheduleService,
    private readonly updateScheduleService: UpdateScheduleService,
    private readonly finishScheduleService: FinishScheduleService,
    private readonly cancelScheduleService: CancelScheduleService,
    private readonly getAllSchedulesService: GetAllSchedulesService,
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

  @Get()
  @ApiOkResponse({
    description: 'Listagem feita com sucesso',
    type: GetAllSchedulesDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a listagem',
  })
  @ApiQuery({
    description: 'Número da página',
    type: 'number',
    name: 'page',
    required: false,
  })
  @ApiQuery({
    description: 'Limite de itens',
    type: 'number',
    name: 'limit',
    required: false,
  })
  @ApiQuery({
    description: 'Id da instituição',
    type: 'number',
    name: 'institutionId',
    required: false,
  })
  @ApiQuery({
    description: 'Id do usuário',
    type: 'number',
    name: 'userId',
    required: false,
  })
  async getAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('institutionId') institutionId?: string,
    @Query('userId') userId?: string,
  ): Promise<Pagination<Schedules>> {
    limit = limit > 100 ? 100 : limit;
    return this.getAllSchedulesService.execute({
      options: {
        page,
        limit,
        route: '/services',
      },
      institutionId,
      userId,
    });
  }
}
