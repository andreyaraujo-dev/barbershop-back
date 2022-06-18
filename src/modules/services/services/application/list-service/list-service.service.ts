import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicesEntity } from '../../../entities/services.entity';
import { Repository } from 'typeorm';

import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

type ListServiceProps = {
  options: IPaginationOptions;
  institutionId?: string;
  name?: string;
};

@Injectable()
export class ListServicesService {
  constructor(
    @InjectRepository(ServicesEntity)
    private readonly serviceRepository: Repository<ServicesEntity>,
  ) {}

  async execute({
    options,
    institutionId,
    name,
  }: ListServiceProps): Promise<Pagination<ServicesEntity>> {
    const queryBuilder = this.serviceRepository.createQueryBuilder('s');
    if (institutionId)
      queryBuilder.andWhere('s.institutionId = :institutionId', {
        institutionId,
      });
    if (name) queryBuilder.andWhere('s.name like :name', { name: `%${name}%` });
    queryBuilder.orderBy('s.name', 'ASC');

    return paginate<ServicesEntity>(queryBuilder, options);
  }
}
