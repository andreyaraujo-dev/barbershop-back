import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateAddressDto } from './dto/create-address.dto';
import { CreatedAddressDto } from './dto/created-address.dto';
import { CreateAddressService } from './services/application/create-address/create-address.service';

@ApiTags('Addresses')
@Controller('address')
export class AddressController {
  constructor(private readonly createAddressService: CreateAddressService) {}

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
}
