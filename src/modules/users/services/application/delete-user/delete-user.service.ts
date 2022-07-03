import { Users } from 'src/modules/users/entities/users.entity';
import { NotFoundUserException } from 'src/modules/users/exceptions/user-not-found.exception';
import { DeleteResult, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeleteUserService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async execute(userId: string): Promise<DeleteResult> {
    const user = await this.usersRepository.findOne(userId);
    if (!user) throw new NotFoundUserException();
    return this.usersRepository.delete(userId);
  }
}
