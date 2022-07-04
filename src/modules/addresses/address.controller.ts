import { DeleteResult } from 'typeorm';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { CreateAddressDto } from './dto/create-address.dto';
import { CreatedAddressDto } from './dto/created-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Addresses } from './entities/addresses.entity';
import { CreateAddressService } from './services/application/create-address/create-address.service';
import { DeleteAddressService } from './services/application/delete-address/delete-address.service';
import { FindAddressByIdService } from './services/application/find-address-by-id/find-address-by-id.service';
import { UpdateAddressService } from './services/application/update-address/update-address.service';

@ApiTags('Addresses')
@Controller('address')
export class AddressController {
  constructor(
    private readonly createAddressService: CreateAddressService,
    private readonly findAddressByIdService: FindAddressByIdService,
    private readonly updateAddressService: UpdateAddressService,
    private readonly deleteAddressService: DeleteAddressService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Endereço registrado com sucesso',
    type: CreatedAddressDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a criação',
  })
  async create(@Body() body: CreateAddressDto): Promise<CreatedAddressDto> {
    return this.createAddressService.execute(body);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Dados retornados com sucesso.',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a pesquisa',
  })
  @ApiParam({
    description: 'Id do endereço',
    name: 'id',
  })
  async findById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Addresses> {
    return this.findAddressByIdService.execute(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Dados atualizados com sucesso.',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a atualização',
  })
  @ApiParam({
    description: 'Id do endereço',
    name: 'id',
  })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateAddressDto,
  ): Promise<Addresses> {
    return this.updateAddressService.execute(id, body);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Dados deletados com sucesso.',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor',
  })
  @ApiBadRequestResponse({
    description: 'Não foi possível realizar a deleção',
  })
  @ApiParam({
    description: 'Id do endereço',
    name: 'id',
  })
  async delete(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<DeleteResult> {
    return this.deleteAddressService.execute(id);
  }
}
