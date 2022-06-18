import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicesEntity } from '../../../entities/services.entity';
import { Repository } from 'typeorm';

import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class ListServicesService {
  constructor(
    @InjectRepository(ServicesEntity)
    private readonly serviceRepository: Repository<ServicesEntity>,
  ) {}

  async execute(
    options: IPaginationOptions,
    institutionId?: string,
  ): Promise<Pagination<ServicesEntity>> {
    return paginate<ServicesEntity>(
      this.serviceRepository,
      options,
      institutionId && {
        where: { institutionId },
      },
    );
  }
}
