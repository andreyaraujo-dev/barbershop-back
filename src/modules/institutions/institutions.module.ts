import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InstitutionsController } from './institutions.controller';
import { InstitutionsEntity } from './institutions.entity';
import { CreateInstitutionService } from './services/application/create-institution/create-institution.service';
import { FindInstitutionsService } from './services/application/find-institutions/find-institutions.service';
import { ListInstitutionsService } from './services/application/list-institutions/list-institutions.service';
import { UpdateInstitutionService } from './services/application/update-institution/update-institution.service';

@Module({
  imports: [TypeOrmModule.forFeature([InstitutionsEntity])],
  controllers: [InstitutionsController],
  providers: [
    ListInstitutionsService,
    CreateInstitutionService,
    UpdateInstitutionService,
    FindInstitutionsService,
  ],
  exports: [],
})
export class InstitutionsModule {}
