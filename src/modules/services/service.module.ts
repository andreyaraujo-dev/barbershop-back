import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ServicesEntity } from './entities/services.entity';
import { ServiceController } from './service.controller';
import { CreateServiceService } from './services/application/create-service/create-service.service';
import { DeleteServiceService } from './services/application/delete-service/delete-service.service';
import { FindByIdServiceService } from './services/application/find-by-id-service/find-by-id-service.service';
import { ListServicesService } from './services/application/list-service/list-service.service';
import { UpdateServiceService } from './services/application/update-service/update-service.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServicesEntity])],
  controllers: [ServiceController],
  providers: [
    CreateServiceService,
    ListServicesService,
    UpdateServiceService,
    DeleteServiceService,
    FindByIdServiceService,
  ],
  exports: [],
})
export class ServiceModule {}
