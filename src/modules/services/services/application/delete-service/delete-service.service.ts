import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceNotFoundException } from 'src/modules/services/exceptions/service-not-found.exception';
import { DeleteResult, Repository } from 'typeorm';
import { ServicesEntity } from '../../../entities/services.entity';

@Injectable()
export class DeleteServiceService {
  constructor(
    @InjectRepository(ServicesEntity)
    private readonly servicesRepository: Repository<ServicesEntity>,
  ) {}

  async execute(id: string): Promise<DeleteResult> {
    const service = await this.servicesRepository.findOne(id);
    if (!service) throw new ServiceNotFoundException();

    return this.servicesRepository.delete(id);
  }
}
