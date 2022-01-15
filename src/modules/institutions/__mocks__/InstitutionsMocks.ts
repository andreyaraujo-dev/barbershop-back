import { InstitutionsEntity } from '../institutions.entity';

export class InstitutionsMocks {
  createInstitution = (): InstitutionsEntity =>
    new InstitutionsEntity({
      id: '',
      name: '',
      description: '',
      facilities: '',
      payments_methods: '',
      opening_hours: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
}
