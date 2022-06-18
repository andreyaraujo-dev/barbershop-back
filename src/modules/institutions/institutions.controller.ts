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
import { CreatedInstitutionDto } from './dto/created-institution.dto';
import { UpdatedInstitutionDto } from './dto/updated-institution.dto';
import { InstitutionsEntity } from './entities/institutions.entity';
import { CreateInstitutionService } from './services/application/create-institution/create-institution.service';
import { ListInstitutionsService } from './services/application/list-institutions/list-institutions.service';
import { UpdateInstitutionService } from './services/application/update-institution/update-institution.service';
import { FindByNameInstitutionsService } from './services/application/find-by-name-institution/find-by-name-institutions.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FindByIdInstitutionService } from './services/application/find-by-id-institution/find-by-id-institution.service';

@ApiTags('Institutions')
@Controller('api/v1/institutions')
export class InstitutionsController {
  constructor(
    private readonly listInstitutionsService: ListInstitutionsService,
    private readonly createInstitutionService: CreateInstitutionService,
    private readonly updateInstitutionService: UpdateInstitutionService,
    private readonly findByNameInstitutionService: FindByNameInstitutionsService,
    private readonly findByIdInstitutionService: FindByIdInstitutionService,
  ) {}

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
  @ApiOkResponse({
    description: 'Pesquisa por nome feita com sucesso',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a pesquisa',
  })
  async find(
    @Query('name') name: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<InstitutionsEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.findByNameInstitutionService.execute(
      {
        page,
        limit,
        route: '/institutions/search?name=',
      },
      name,
    );
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Instituição criada com sucesso',
    type: CreatedInstitutionDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a listagem',
  })
  async create(
    @Body() body: CreateInstitutionDto,
  ): Promise<CreateInstitutionDto> {
    return this.createInstitutionService.execute(body);
  }

  @Put(':id')
  @ApiOkResponse({
    description: 'Atualização feita com sucesso',
    type: UpdatedInstitutionDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a atualização',
  })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateInstitutionDto,
  ): Promise<InstitutionsEntity> {
    return this.updateInstitutionService.execute(body, id);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Pesquisa feita com sucesso',
    type: InstitutionsEntity,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a pesquisa',
  })
  async findById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<InstitutionsEntity> {
    return this.findByIdInstitutionService.execute(id);
  }
}
