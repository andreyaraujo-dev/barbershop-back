import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressController } from './address.controller';
import { Addresses } from './entities/addresses.entity';
import { CreateAddressService } from './services/application/create-address/create-address.service';
import { DeleteAddressService } from './services/application/delete-address/delete-address.service';
import { FindAddressByIdService } from './services/application/find-address-by-id/find-address-by-id.service';
import { UpdateAddressService } from './services/application/update-address/update-address.service';

@Module({
  imports: [TypeOrmModule.forFeature([Addresses])],
  providers: [
    CreateAddressService,
    FindAddressByIdService,
    UpdateAddressService,
    DeleteAddressService,
  ],
  controllers: [AddressController],
})
export class AddressModule {}
