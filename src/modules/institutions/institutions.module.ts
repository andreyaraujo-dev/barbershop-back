import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InstitutionsController } from './institutions.controller';
import { InstitutionsEntity } from './entities/institutions.entity';
import { CreateInstitutionService } from './services/application/create-institution/create-institution.service';
import { FindByNameInstitutionsService } from './services/application/find-by-name-institution/find-by-name-institutions.service';
import { ListInstitutionsService } from './services/application/list-institutions/list-institutions.service';
import { UpdateInstitutionService } from './services/application/update-institution/update-institution.service';
import { FindByIdInstitutionService } from './services/application/find-by-id-institution/find-by-id-institution.service';

@Module({
  imports: [TypeOrmModule.forFeature([InstitutionsEntity])],
  controllers: [InstitutionsController],
  providers: [
    ListInstitutionsService,
    CreateInstitutionService,
    UpdateInstitutionService,
    FindByNameInstitutionsService,
    FindByIdInstitutionService,
  ],
  exports: [],
})
export class InstitutionsModule {}
