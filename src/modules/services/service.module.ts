import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesEntity } from './entities/services.entity';
import { ServiceController } from './service.controller';
import { CreateServiceService } from './services/application/create-service/create-service.service';
import { ListServicesService } from './services/application/list-service/list-service.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServicesEntity])],
  controllers: [ServiceController],
  providers: [CreateServiceService, ListServicesService],
  exports: [],
})
export class ServiceModule {}
