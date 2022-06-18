import { Like, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { InstitutionsEntity } from '../../../entities/institutions.entity';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class FindByNameInstitutionsService {
  constructor(
    @InjectRepository(InstitutionsEntity)
    private institutionsRepository: Repository<InstitutionsEntity>,
  ) {}

  async execute(
    options: IPaginationOptions,
    name: string,
  ): Promise<Pagination<InstitutionsEntity>> {
    return paginate<InstitutionsEntity>(this.institutionsRepository, options, {
      where: { name: Like(`%${name}%`) },
    });
  }
}
