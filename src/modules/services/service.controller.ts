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
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CreateServiceDto } from './dto/create-service.dto';
import { CreatedServiceDto } from './dto/created-service.dto';
import { ListServicesResult } from './dto/list-services-result.dto';
import { UpdatedServiceDto } from './dto/updated-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServicesEntity } from './entities/services.entity';
import { CreateServiceService } from './services/application/create-service/create-service.service';
import { ListServicesService } from './services/application/list-service/list-service.service';
import { UpdateServiceService } from './services/application/update-service/update-service.service';

@ApiTags('Services')
@Controller('api/v1/services')
export class ServiceController {
  constructor(
    private readonly createServiceService: CreateServiceService,
    private readonly listServicesService: ListServicesService,
    private readonly updateServiceService: UpdateServiceService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Serviço criado com sucesso',
    type: CreatedServiceDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a criação do serviço',
  })
  async create(@Body() body: CreateServiceDto): Promise<ServicesEntity> {
    return this.createServiceService.execute(body);
  }

  @Get()
  @ApiOkResponse({
    description: 'Listagem feita com sucesso',
    type: ListServicesResult,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a listagem dos serviços',
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
    description: 'Nome do serviço',
    type: 'string',
    name: 'name',
    required: false,
  })
  async list(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('institutionId') institutionId?: string,
    @Query('name') name?: string,
  ): Promise<Pagination<ServicesEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.listServicesService.execute({
      options: {
        page,
        limit,
        route: 'api/v1/services',
      },
      institutionId,
      name,
    });
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Atualização feita com sucesso',
    type: UpdatedServiceDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a atualização do serviço',
  })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateServiceDto,
  ): Promise<ServicesEntity> {
    return this.updateServiceService.execute(body, id);
  }
}
