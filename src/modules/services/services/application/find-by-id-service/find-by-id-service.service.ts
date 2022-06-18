import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicesEntity } from 'src/modules/services/entities/services.entity';
import { ServiceNotFoundException } from 'src/modules/services/exceptions/service-not-found.exception';
import { Repository } from 'typeorm';

@Injectable()
export class FindByIdServiceService {
  constructor(
    @InjectRepository(ServicesEntity)
    private readonly servicesRepository: Repository<ServicesEntity>,
  ) {}

  async execute(id: string): Promise<ServicesEntity> {
    const service = await this.servicesRepository.findOne(id);
    if (!service) throw new ServiceNotFoundException();

    return service;
  }
}
