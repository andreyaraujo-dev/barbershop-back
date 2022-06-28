import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EmployeesModule } from './modules/employees/employees.module';
import { InstitutionsModule } from './modules/institutions/institutions.module';
import { ServiceModule } from './modules/services/service.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SharedModule,
    InstitutionsModule,
    ServiceModule,
    EmployeesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
