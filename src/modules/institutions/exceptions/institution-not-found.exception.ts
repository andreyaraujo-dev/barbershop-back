import { NotFoundException } from '@nestjs/common';

export class InstitutionNotFoundException extends NotFoundException {
  constructor(institutionId: string) {
    super(
      `Instituição com id ${institutionId} não encontrado`,
      InstitutionNotFoundException.name,
    );
  }
}
