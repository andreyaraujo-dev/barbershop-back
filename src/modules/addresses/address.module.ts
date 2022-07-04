import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressController } from './address.controller';
import { Addresses } from './entities/addresses.entity';
import { CreateAddressService } from './services/application/create-address/create-address.service';
import { FindAddressByIdService } from './services/application/find-address-by-id/find-address-by-id.service';

@Module({
  imports: [TypeOrmModule.forFeature([Addresses])],
  providers: [CreateAddressService, FindAddressByIdService],
  controllers: [AddressController],
})
export class AddressModule {}
