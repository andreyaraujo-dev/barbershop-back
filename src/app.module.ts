import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { InstitutionsModule } from './modules/institutions/institutions.module';
import { ServiceModule } from './modules/services/service.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SharedModule,
    InstitutionsModule,
    ServiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
