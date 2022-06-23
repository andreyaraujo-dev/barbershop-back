import { ServicesEntity } from 'src/modules/services/entities/services.entity';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateServiceDto } from '../../../dto/create-service.dto';

@Injectable()
export class CreateServiceService {
  constructor(
    @InjectRepository(ServicesEntity)
    private readonly serviceRepository: Repository<ServicesEntity>,
  ) {}

  async execute(createServiceDto: CreateServiceDto): Promise<ServicesEntity> {
    const service = this.serviceRepository.create(createServiceDto);
    return this.serviceRepository.save(service);
  }
}
