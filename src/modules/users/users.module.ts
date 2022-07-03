import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Users } from './entities/users.entity';
import { CreateUserService } from './services/application/create-user/create-user.service';
import { FindUserByIdService } from './services/application/find-user-by-id/find-user-by-id.service';
import { FindUsersByInstitutionService } from './services/application/find-users-by-institution/find-users-by-institution.service';
import { HashService } from './services/domain/hash/hash.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [
    CreateUserService,
    HashService,
    FindUsersByInstitutionService,
    FindUserByIdService,
  ],
  exports: [],
  controllers: [UsersController],
})
export class UsersModule {}
