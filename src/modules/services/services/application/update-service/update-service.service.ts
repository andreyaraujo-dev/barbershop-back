import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicesEntity } from '../../../entities/services.entity';
import { UpdateServiceDto } from '../../../dto/update-service.dto';
import { ServiceNotFoundException } from '../../../exceptions/service-not-found.exception';

@Injectable()
export class UpdateServiceService {
  constructor(
    @InjectRepository(ServicesEntity)
    private readonly servicesRepository: Repository<ServicesEntity>,
  ) {}

  async execute(
    updateServiceDto: UpdateServiceDto,
    id: string,
  ): Promise<ServicesEntity> {
    const service = await this.servicesRepository.findOne(id);
    if (!service) throw new ServiceNotFoundException();

    this.servicesRepository.merge(service, updateServiceDto);

    return this.servicesRepository.save(service);
  }
}
