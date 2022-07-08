import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Schedules } from 'src/modules/schedule/entities/schedule.entity';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

type ListSchedulesProps = {
  options: IPaginationOptions;
  institutionId?: string;
  userId?: string;
  employeeId?: string;
  serviceId?: string;
};

@Injectable()
export class GetAllSchedulesService {
  constructor(
    @InjectRepository(Schedules)
    private readonly scheduleRepository: Repository<Schedules>,
  ) {}

  async execute({
    options,
    institutionId,
    userId,
    employeeId,
    serviceId,
  }: ListSchedulesProps): Promise<Pagination<Schedules>> {
    const queryBuilder = this.scheduleRepository.createQueryBuilder('s');
    if (institutionId) {
      queryBuilder.where('s.institutionId = :institutionId', {
        institutionId,
      });
    }
    if (userId) {
      queryBuilder.where('s.userId = :userId', { userId });
    }
    if (employeeId) {
      queryBuilder.where('s.employeeId = :employeeId', { employeeId });
    }
    if (serviceId) {
      queryBuilder.where('s.serviceId = :serviceId', { serviceId });
    }

    return paginate<Schedules>(queryBuilder, options);
  }
}
