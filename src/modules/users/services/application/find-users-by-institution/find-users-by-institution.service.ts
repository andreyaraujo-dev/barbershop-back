import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Users } from 'src/modules/users/entities/users.entity';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindUsersByInstitutionService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async execute(
    institutionId: string,
    options: IPaginationOptions,
  ): Promise<Pagination<Users>> {
    return paginate<Users>(this.usersRepository, options, {
      where: { institutionId },
      select: [
        'id',
        'firstName',
        'lastName',
        'birthDate',
        'isAdmin',
        'phone',
        'email',
        'institutionId',
        'addressId',
        'lastLogin',
        'createdAt',
        'updatedAt',
      ],
      relations: ['address'],
    });
  }
}
