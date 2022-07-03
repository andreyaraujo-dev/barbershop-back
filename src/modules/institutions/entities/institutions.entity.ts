import { EmployeesEntity } from 'src/modules/employees/entities/employees.entity';
import { Users } from 'src/modules/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ServicesEntity } from '../../services/entities/services.entity';

@Entity({ name: 'institutions' })
export class InstitutionsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 100 })
  facilities: string;

  @Column({ type: 'varchar', length: 100 })
  paymentsMethods: string;

  @Column({ type: 'varchar', length: 80 })
  openingHours: string;

  @OneToMany(() => ServicesEntity, (service) => service.institution)
  services: ServicesEntity[];

  @OneToMany(() => EmployeesEntity, (employee) => employee.institution)
  employees: EmployeesEntity[];

  @OneToMany(() => Users, (user) => user.institution)
  users: Users[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(data: Partial<InstitutionsEntity>) {
    Object.assign(this, data);
  }
}
