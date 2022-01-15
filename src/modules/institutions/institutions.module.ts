import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InstitutionsController } from './institutions.controller';
import { InstitutionsEntity } from './institutions.entity';
import { ListInstitutionsService } from './services/application/list-institutions/list-institutions.service';

@Module({
  imports: [TypeOrmModule.forFeature([InstitutionsEntity])],
  controllers: [InstitutionsController],
  providers: [ListInstitutionsService],
  exports: [ListInstitutionsService, TypeOrmModule],
})
export class InstitutionsModule {}
