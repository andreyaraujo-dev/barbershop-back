import { CreateAddressDto } from 'src/modules/addresses/dto/create-address.dto';
import { Addresses } from 'src/modules/addresses/entities/addresses.entity';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateAddressService {
  constructor(
    @InjectRepository(Addresses)
    private readonly addressRepository: Repository<Addresses>,
  ) {}

  async execute(createAddressDto: CreateAddressDto): Promise<Addresses> {
    const address = this.addressRepository.create(createAddressDto);
    return this.addressRepository.save(address);
  }
}
