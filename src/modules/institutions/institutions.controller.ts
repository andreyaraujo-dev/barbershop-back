import { Controller, Get } from '@nestjs/common';

import { InstitutionsEntity } from './institutions.entity';
import { ListInstitutionsService } from './services/application/list-institutions/list-institutions.service';

@Controller('api/v1/institutions')
export class InstitutionsController {
  constructor(
    private readonly listInstitutionsService: ListInstitutionsService,
  ) {}

  @Get()
  async find(): Promise<InstitutionsEntity[]> {
    return this.listInstitutionsService.execute();
  }
}
