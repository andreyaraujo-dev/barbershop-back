import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateInstitutionDto } from '../../../dto/create-institution.dto';
import { InstitutionsEntity } from '../../../institutions.entity';

@Injectable()
export class CreateInstitutionService {
  constructor(
    @InjectRepository(InstitutionsEntity)
    private readonly institutionsRepository: Repository<InstitutionsEntity>,
  ) {}

  async execute(data: CreateInstitutionDto): Promise<InstitutionsEntity> {
    const institution = this.institutionsRepository.create(data);
    return await this.institutionsRepository.save(institution);
  }
}
