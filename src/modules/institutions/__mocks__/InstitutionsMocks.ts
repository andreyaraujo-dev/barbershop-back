import { InstitutionsEntity } from '../entities/institutions.entity';

export class InstitutionsMocks {
  createInstitution = (): InstitutionsEntity =>
    new InstitutionsEntity({
      id: '',
      name: '',
      description: '',
      facilities: '',
      paymentsMethods: '',
      openingHours: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
}
