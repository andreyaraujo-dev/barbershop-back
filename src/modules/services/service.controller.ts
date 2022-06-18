import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CreateServiceDto } from './dto/create-service.dto';
import { ServicesEntity } from './entities/services.entity';
import { CreateServiceService } from './services/application/create-service/create-service.service';
import { ListServicesService } from './services/application/list-service/list-service.service';

@ApiTags('Services')
@Controller('api/v1/services')
export class ServiceController {
  constructor(
    private readonly createServiceService: CreateServiceService,
    private readonly listServicesService: ListServicesService,
  ) {}

  @Post()
  async create(@Body() body: CreateServiceDto): Promise<ServicesEntity> {
    return this.createServiceService.execute(body);
  }

  @Get()
  async list(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('institutionId') institutionId?: string,
  ): Promise<Pagination<ServicesEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.listServicesService.execute(
      {
        page,
        limit,
        route: 'api/v1/services',
      },
      institutionId,
    );
  }
}
