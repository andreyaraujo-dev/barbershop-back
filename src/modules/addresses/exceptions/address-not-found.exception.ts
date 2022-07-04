import { NotFoundException } from '@nestjs/common';

export class AddressNotFoundException extends NotFoundException {
  constructor() {
    super(`Dados do endereço não encontrado`, AddressNotFoundException.name);
  }
}
