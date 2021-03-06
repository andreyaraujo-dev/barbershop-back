import { Pagination } from 'nestjs-typeorm-paginate';
import { DeleteResult } from 'typeorm';

import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { CreatedUserDto } from './dto/created-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/users.entity';
import { CreateUserService } from './services/application/create-user/create-user.service';
import { DeleteUserService } from './services/application/delete-user/delete-user.service';
import { FindUserByIdService } from './services/application/find-user-by-id/find-user-by-id.service';
import { FindUsersByInstitutionService } from './services/application/find-users-by-institution/find-users-by-institution.service';
import { UpdateUserService } from './services/application/update-user/update-user.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly findUsersByInstitution: FindUsersByInstitutionService,
    private readonly findUserByIdService: FindUserByIdService,
    private readonly updateUserService: UpdateUserService,
    private readonly deleteUserService: DeleteUserService,
  ) {}

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

  @Get('/institution/:id')
  @ApiOkResponse({ description: 'Listagem feita com sucesso' })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a listagem dos usuários',
  })
  @ApiQuery({
    description: 'Número da página',
    type: 'number',
    name: 'page',
    required: false,
  })
  @ApiQuery({
    description: 'Limite de itens',
    type: 'number',
    name: 'limit',
    required: false,
  })
  @ApiParam({
    name: 'id',
    description: 'Id da instituição',
    required: true,
  })
  async listByInstitution(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Pagination<Users>> {
    limit = limit > 100 ? 100 : limit;

    return this.findUsersByInstitution.execute(id, {
      page,
      limit,
      route: `/users/institution/${id}`,
    });
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Pesquisa feita com sucesso' })
  @ApiParam({
    name: 'id',
    description: 'Id do usuário',
    required: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a pesquisa',
  })
  async findById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Users> {
    return this.findUserByIdService.execute(id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Atualização feita com sucesso' })
  @ApiParam({
    name: 'id',
    description: 'Id do usuário',
    required: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a atualização',
  })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateUserDto,
  ): Promise<Users> {
    return this.updateUserService.execute(body, id);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleção feita com sucesso' })
  @ApiParam({
    name: 'id',
    description: 'Id do usuário',
    required: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a deleção',
  })
  async delete(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<DeleteResult> {
    return this.deleteUserService.execute(id);
  }
}
