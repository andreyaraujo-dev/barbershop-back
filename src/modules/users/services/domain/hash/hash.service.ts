import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';

@Injectable()
export class HashService {
  hashPassword(password: string): string {
    return bcrypt.hashSync(password, 8);
  }

  comparePasswords(informedPassword: string, savedPassword: string): boolean {
    return bcrypt.compareSync(informedPassword, savedPassword);
  }
}
