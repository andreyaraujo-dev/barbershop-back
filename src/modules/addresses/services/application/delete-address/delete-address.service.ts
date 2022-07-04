import { Addresses } from 'src/modules/addresses/entities/addresses.entity';
import { AddressNotFoundException } from 'src/modules/addresses/exceptions/address-not-found.exception';
import { DeleteResult, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeleteAddressService {
  constructor(
    @InjectRepository(Addresses)
    private readonly addressRepository: Repository<Addresses>,
  ) {}

  async execute(addressId: string): Promise<DeleteResult> {
    const address = await this.addressRepository.findOne(addressId);
    if (!address) throw new AddressNotFoundException();

    return this.addressRepository.delete(addressId);
  }
}
