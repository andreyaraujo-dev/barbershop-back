import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { Users } from 'src/modules/users/entities/users.entity';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { HashService } from '../../domain/hash/hash.service';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly hashService: HashService,
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<Users> {
    const passwordHash = this.hashService.hashPassword(createUserDto.password);
    const user = this.usersRepository.create({
      ...createUserDto,
      password: passwordHash,
    });
    return this.usersRepository.save(user);
  }
}
