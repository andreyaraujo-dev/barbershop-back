import { Users } from 'src/modules/users/entities/users.entity';
import { NotFoundUserException } from 'src/modules/users/exceptions/user-not-found.exception';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindUserByIdService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async execute(userId: string): Promise<Users> {
    const user = await this.usersRepository.findOne(userId, {
      select: [
        'id',
        'firstName',
        'lastName',
        'birthDate',
        'createdAt',
        'lastLogin',
      ],
    });

    if (!user) throw new NotFoundUserException();

    return user;
  }
}
