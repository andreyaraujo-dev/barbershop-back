import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AddressModule } from './modules/addresses/address.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { InstitutionsModule } from './modules/institutions/institutions.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { ServiceModule } from './modules/services/service.module';
import { SharedModule } from './modules/shared/shared.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SharedModule,
    InstitutionsModule,
    ServiceModule,
    EmployeesModule,
    UsersModule,
    AddressModule,
    ScheduleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
