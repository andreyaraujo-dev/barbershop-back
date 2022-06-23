import { Injectable } from '@nestjs/common';

import { ConstantKeys } from '../../config/constant-keys.enum';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class SecretService {
  constructor(private loggerService: LoggerService) {
    this.loggerService.setContext(SecretService.name);
  }

  private fetchEnvVar(key: ConstantKeys): string | undefined {
    if (key in process.env) {
      return process.env[key];
    }

    return undefined;
  }

  fetchEnvSecret(key: ConstantKeys): string | undefined {
    this.loggerService.debug(`Fetching secret ${key}`);

    const secret = this.fetchEnvVar(key);

    this.loggerService.debug(`${key} resolved`);
    return secret;
  }
}
