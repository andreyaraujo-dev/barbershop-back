import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { InstitutionsModule } from './modules/institutions/institutions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NAME,
      entities: ['/src/modules/**/*.entity.ts', './dist/**/*.entity{.ts,.js}'],
      migrations: ['/src/modules/shared/database/migrations/*.ts'],
      cli: {
        migrationsDir: '/src/modules/shared/database/migrations',
      },
      synchronize: true,
    } as TypeOrmModuleOptions),
    InstitutionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
