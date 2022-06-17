import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { InstitutionsEntity } from '../../../entities/institutions.entity';

@Injectable()
export class ListInstitutionsService {
  constructor(
    @InjectRepository(InstitutionsEntity)
    private institutionsRepository: Repository<InstitutionsEntity>,
  ) {}

  async execute(): Promise<InstitutionsEntity[]> {
    return await this.institutionsRepository.find();
  }
}
