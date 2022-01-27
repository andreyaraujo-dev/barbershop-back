import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put, Query,
} from '@nestjs/common';

import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { InstitutionsEntity } from './institutions.entity';
import { CreateInstitutionService } from './services/application/create-institution/create-institution.service';
import { ListInstitutionsService } from './services/application/list-institutions/list-institutions.service';
import { UpdateInstitutionService } from './services/application/update-institution/update-institution.service';
import { FindInstitutionsService } from './services/application/find-institutions/find-institutions.service';

@Controller('api/v1/institutions')
export class InstitutionsController {
  constructor(
    private readonly listInstitutionsService: ListInstitutionsService,
    private readonly createInstitutionService: CreateInstitutionService,
    private readonly updateInstitutionService: UpdateInstitutionService,
    private readonly findInstitutionService: FindInstitutionsService,
  ) {}

  @Get()
  async list(): Promise<InstitutionsEntity[]> {
    return this.listInstitutionsService.execute();
  }

  @Get('search')
  async find(@Query('name') name: string): Promise<InstitutionsEntity[]> {
    return this.findInstitutionService.execute(name);
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
