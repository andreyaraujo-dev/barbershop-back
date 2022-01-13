import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InstitutionsController } from './institutions.controller';
import { InstitutionsEntity } from './institutions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstitutionsEntity])],
  controllers: [InstitutionsController],
  providers: [],
  exports: [],
})
export class UsersModule {}
