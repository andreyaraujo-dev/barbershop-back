import { UpdateAddressDto } from 'src/modules/addresses/dto/update-address.dto';
import { Addresses } from 'src/modules/addresses/entities/addresses.entity';
import { AddressNotFoundException } from 'src/modules/addresses/exceptions/address-not-found.exception';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UpdateAddressService {
  constructor(
    @InjectRepository(Addresses)
    private readonly addressRepository: Repository<Addresses>,
  ) {}

  async execute(
    addressId: string,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Addresses> {
    const address = await this.addressRepository.findOne(addressId);
    if (!address) throw new AddressNotFoundException();

    this.addressRepository.merge(address, updateAddressDto);

    return this.addressRepository.save(address);
  }
}
