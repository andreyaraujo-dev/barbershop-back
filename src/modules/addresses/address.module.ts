import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressController } from './address.controller';
import { Addresses } from './entities/addresses.entity';
import { CreateAddressService } from './services/application/create-address/create-address.service';

@Module({
  imports: [TypeOrmModule.forFeature([Addresses])],
  providers: [CreateAddressService],
  controllers: [AddressController],
})
export class AddressModule {}
