import { InstitutionsEntity } from 'src/modules/institutions/entities/institutions.entity';
import { InstitutionNotFoundException } from 'src/modules/institutions/exceptions/institution-not-found.exception';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindByIdInstitutionService {
  constructor(
    @InjectRepository(InstitutionsEntity)
    private readonly institutionsRepository: Repository<InstitutionsEntity>,
  ) {}

  async execute(id: string): Promise<InstitutionsEntity> {
    const institution = await this.institutionsRepository.findOne(id, {
      relations: ['services', 'address'],
    });
    if (!institution) throw new InstitutionNotFoundException(id);

    return institution;
  }
}
