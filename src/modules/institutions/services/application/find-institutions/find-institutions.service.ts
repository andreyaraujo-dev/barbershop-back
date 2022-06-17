import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { InstitutionsEntity } from '../../../entities/institutions.entity';

@Injectable()
export class FindInstitutionsService {
  constructor(
    @InjectRepository(InstitutionsEntity)
    private institutionsRepository: Repository<InstitutionsEntity>,
  ) {}

  async execute(name: string): Promise<InstitutionsEntity[]> {
    return await this.institutionsRepository.find({
      where: { name },
    });
  }
}
