import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { InstitutionsEntity } from './entities/institutions.entity';
import { CreateInstitutionService } from './services/application/create-institution/create-institution.service';
import { ListInstitutionsService } from './services/application/list-institutions/list-institutions.service';
import { UpdateInstitutionService } from './services/application/update-institution/update-institution.service';
import { FindInstitutionsService } from './services/application/find-institutions/find-institutions.service';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('api/v1/institutions')
export class InstitutionsController {
  constructor(
    private readonly listInstitutionsService: ListInstitutionsService,
    private readonly createInstitutionService: CreateInstitutionService,
    private readonly updateInstitutionService: UpdateInstitutionService,
    private readonly findInstitutionService: FindInstitutionsService,
  ) {}

  @Get()
  async list(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<InstitutionsEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.listInstitutionsService.execute({
      page,
      limit,
      route: '/institutions',
    });
  }

  @Get('search')
  async find(
    @Query('name') name: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<InstitutionsEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.findInstitutionService.execute(
      {
        page,
        limit,
        route: '/institutions',
      },
      name,
    );
  }

  @Post()
  async create(
    @Body() body: CreateInstitutionDto,
  ): Promise<CreateInstitutionDto> {
    return this.createInstitutionService.execute(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateInstitutionDto,
  ): Promise<InstitutionsEntity> {
    return this.updateInstitutionService.execute(body, id);
  }
}
