import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesEntity } from './entities/services.entity';
import { ServiceController } from './service.controller';
import { CreateServiceService } from './services/application/create-service/create-service.service';
import { ListServicesService } from './services/application/list-service/list-service.service';
import { UpdateServiceService } from './services/application/update-service/update-service.service';
import { DeleteServiceService } from './services/application/delete-service/delete-service.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServicesEntity])],
  controllers: [ServiceController],
  providers: [
    CreateServiceService,
    ListServicesService,
    UpdateServiceService,
    DeleteServiceService,
  ],
  exports: [],
})
export class ServiceModule {}
