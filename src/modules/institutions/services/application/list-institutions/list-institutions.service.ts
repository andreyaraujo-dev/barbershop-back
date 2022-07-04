import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
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

  async execute(
    options: IPaginationOptions,
  ): Promise<Pagination<InstitutionsEntity>> {
    return paginate<InstitutionsEntity>(this.institutionsRepository, options, {
      relations: ['services', 'address'],
    });
  }
}
