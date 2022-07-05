import { EmployeesEntity } from 'src/modules/employees/entities/employees.entity';
import { InstitutionsEntity } from 'src/modules/institutions/entities/institutions.entity';
import { ServicesEntity } from 'src/modules/services/entities/services.entity';
import { Users } from 'src/modules/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'schedules' })
export class Schedules {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Users)
  user: Users;

  @Column()
  userId: string;

  @OneToOne(() => InstitutionsEntity)
  institution: InstitutionsEntity;

  @Column()
  institutionId: string;

  @OneToOne(() => ServicesEntity)
  service: ServicesEntity;

  @Column()
  serviceId: string;

  @OneToOne(() => EmployeesEntity)
  employee: EmployeesEntity;

  @Column()
  employeeId: string;

  @Column()
  scheduleDate: Date;

  @Column()
  paymentMethod: string;

  @Column()
  finished: boolean;

  @Column()
  canceled: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  constructor(data: Partial<Schedules>) {
    Object.assign(this, data);
  }
}
