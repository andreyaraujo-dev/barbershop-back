import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateServiceDto } from './dto/create-service.dto';
import { ServicesEntity } from './entities/services.entity';
import { CreateServiceService } from './services/application/create-service/create-service.service';

@ApiTags('Services')
@Controller('api/v1/services')
export class ServiceController {
  constructor(private readonly createServiceService: CreateServiceService) {}

  @Post()
  async create(@Body() body: CreateServiceDto): Promise<ServicesEntity> {
    return this.createServiceService.execute(body);
  }
}
