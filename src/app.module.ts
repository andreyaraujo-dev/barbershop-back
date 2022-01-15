import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InstitutionsModule } from './modules/institutions/institutions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    InstitutionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
