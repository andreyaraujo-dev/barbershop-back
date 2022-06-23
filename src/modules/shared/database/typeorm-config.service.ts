import { join } from 'path';

import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { ConstantKeys } from '../config/constant-keys.enum';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(ConstantKeys.dbHost) private readonly dbHost: string,
    @Inject(ConstantKeys.dbUser) private readonly dbUser: string,
    @Inject(ConstantKeys.dbPass) private readonly dbPass: string,
    @Inject(ConstantKeys.dbName) private readonly dbName: string,
    @Inject(ConstantKeys.dbPort) private readonly dbPort: string,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.dbHost,
      username: this.dbUser,
      password: this.dbPass,
      database: this.dbName,
      port: Number(this.dbPort),
      entities: [join(__dirname, '/../../**/*.entity{.ts,.js}')],
      synchronize: false,
    };
  }
}
