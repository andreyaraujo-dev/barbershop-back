import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { ConstantKeys } from './src/modules/shared/config/constant-keys.enum';
dotenv.config();
const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env[ConstantKeys.dbHost],
  port: Number(process.env[ConstantKeys.dbPort]),
  password: process.env[ConstantKeys.dbPass],
  database: process.env[ConstantKeys.dbName],
  username: process.env[ConstantKeys.dbUser],
  synchronize: false,
  logging: false,
  migrations: ['./src/modules/shared/database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: './src/modules/shared/database/migrations',
  },
};

export = config;
