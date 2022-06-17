import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { InstitutionsModule } from './modules/institutions/institutions.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot(), SharedModule, InstitutionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
