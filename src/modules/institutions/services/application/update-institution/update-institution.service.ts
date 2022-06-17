import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UpdateInstitutionDto } from '../../../dto/update-institution.dto';
import { InstitutionsEntity } from '../../../entities/institutions.entity';
import { InstitutionNotFoundException } from '../../../exceptions/institution-not-found.exception';

@Injectable()
export class UpdateInstitutionService {
  constructor(
    @InjectRepository(InstitutionsEntity)
    private readonly institutionRepository: Repository<InstitutionsEntity>,
  ) {}

  async execute(
    data: UpdateInstitutionDto,
    id: string,
  ): Promise<InstitutionsEntity> {
    const institution = await this.institutionRepository.findOneOrFail(id);

    if (!institution) {
      throw new InstitutionNotFoundException(id);
    }

    this.institutionRepository.merge(institution, data);

    return await this.institutionRepository.save(institution);
  }
}
