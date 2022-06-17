import { FactoryProvider, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstantKeys } from './config/constant-keys.enum';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { LoggerService } from './services/logger/logger.service';
import { SecretService } from './services/secret/secret.service';

const secretProviders: FactoryProvider[] = Object.values(ConstantKeys).map(
  (key: ConstantKeys): FactoryProvider => {
    return {
      inject: [SecretService],
      provide: key,
      useFactory: (secretService: SecretService): string =>
        secretService.fetchEnvSecret(key),
    };
  },
);

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
  ],
  providers: [LoggerService, SecretService, ...secretProviders],
  exports: [LoggerService, ...secretProviders],
})
export class SharedModule {}
