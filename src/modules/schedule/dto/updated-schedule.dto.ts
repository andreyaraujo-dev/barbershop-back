import { EmployeesEntity } from 'src/modules/employees/entities/employees.entity';
import { InstitutionsEntity } from 'src/modules/institutions/entities/institutions.entity';
import { ServicesEntity } from 'src/modules/services/entities/services.entity';
import { Users } from 'src/modules/users/entities/users.entity';

import { ApiResponseProperty } from '@nestjs/swagger';

export class UpdatedScheduleDto {
  @ApiResponseProperty()
  id: string;

  @ApiResponseProperty()
  employeeId: string;

  @ApiResponseProperty()
  institutionId: string;

  @ApiResponseProperty()
  serviceId: string;

  @ApiResponseProperty()
  userId: string;

  @ApiResponseProperty()
  employee: EmployeesEntity;

  @ApiResponseProperty()
  institution: InstitutionsEntity;

  @ApiResponseProperty()
  service: ServicesEntity;

  @ApiResponseProperty()
  user: Users;

  @ApiResponseProperty()
  scheduleDate: Date;

  @ApiResponseProperty()
  paymentMethod: string;

  @ApiResponseProperty()
  finished: boolean;

  @ApiResponseProperty()
  canceled: boolean;

  @ApiResponseProperty()
  createdAt?: Date;

  @ApiResponseProperty()
  updatedAt?: Date;
}
