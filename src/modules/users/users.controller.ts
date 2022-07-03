import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { CreatedUserDto } from './dto/created-user.dto';
import { Users } from './entities/users.entity';
import { CreateUserService } from './services/application/create-user/create-user.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Usuário criado com sucesso',
    type: CreatedUserDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a criação do usuário',
  })
  async create(@Body() body: CreateUserDto): Promise<Users> {
    return this.createUserService.execute(body);
  }
}
