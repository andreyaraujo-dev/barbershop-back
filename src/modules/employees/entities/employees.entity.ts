import { Addresses } from 'src/modules/addresses/entities/addresses.entity';
import { InstitutionsEntity } from 'src/modules/institutions/entities/institutions.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'employees' })
export class EmployeesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  institutionId: string;

  @ManyToOne(() => InstitutionsEntity, (institution) => institution.services)
  @JoinColumn({ name: 'institutionId' })
  institution: InstitutionsEntity;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  birthDate?: string;

  @Column()
  office: string;

  @Column()
  wage?: number;

  @Column('text', { array: true })
  specialties: string[];

  @OneToOne(() => Addresses)
  @JoinColumn({ name: 'addressId' })
  address: Addresses;

  @Column({ nullable: true })
  addressId?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  constructor(data: Partial<EmployeesEntity>) {
    Object.assign(this, data);
  }
}
