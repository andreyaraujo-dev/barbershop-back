import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
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
import { Addresses } from './entities/addresses.entity';
import { CreateAddressService } from './services/application/create-address/create-address.service';
import { FindAddressByIdService } from './services/application/find-address-by-id/find-address-by-id.service';

@ApiTags('Addresses')
@Controller('address')
export class AddressController {
  constructor(
    private readonly createAddressService: CreateAddressService,
    private readonly findAddressByIdService: FindAddressByIdService,
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
}
