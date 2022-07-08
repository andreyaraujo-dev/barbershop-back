import { EmployeesEntity } from 'src/modules/employees/entities/employees.entity';
import { InstitutionsEntity } from 'src/modules/institutions/entities/institutions.entity';
import { ServicesEntity } from 'src/modules/services/entities/services.entity';
import { Users } from 'src/modules/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'schedules' })
export class Schedules {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Users, { eager: true })
  @JoinColumn({ name: 'userId' })
  user: Users;

  @Column()
  userId: string;

  @OneToOne(() => InstitutionsEntity, { eager: true })
  @JoinColumn({ name: 'institutionId' })
  institution: InstitutionsEntity;

  @Column()
  institutionId: string;

  @OneToOne(() => ServicesEntity, { eager: true })
  @JoinColumn({ name: 'serviceId' })
  service: ServicesEntity;

  @Column()
  serviceId: string;

  @OneToOne(() => EmployeesEntity, { eager: true })
  @JoinColumn({ name: 'employeeId' })
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
