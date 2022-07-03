import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto';
import { Users } from 'src/modules/users/entities/users.entity';
import { NotFoundUserException } from 'src/modules/users/exceptions/user-not-found.exception';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UpdateUserService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async execute(updateUserDto: UpdateUserDto, userId: string): Promise<Users> {
    const user = await this.usersRepository.findOne(userId, {
      select: ['id', 'firstName', 'lastName', 'birthDate'],
    });
    if (!user) throw new NotFoundUserException();

    this.usersRepository.merge(user, updateUserDto);

    return this.usersRepository.save(user);
  }
}
