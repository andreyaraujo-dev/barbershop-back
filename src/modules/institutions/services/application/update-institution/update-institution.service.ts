import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UpdateInstitutionDto } from '../../../dto/update-institution.dto';
import { InstitutionsEntity } from '../../../institutions.entity';

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
      throw new Error('Institution does not exists.');
    }

    this.institutionRepository.merge(institution, data);

    return await this.institutionRepository.save(institution);
  }
}
