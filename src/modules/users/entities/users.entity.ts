import { InstitutionsEntity } from 'src/modules/institutions/entities/institutions.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthDate: Date;

  @Column()
  institutionId: string;

  @ManyToOne(() => InstitutionsEntity, (institution) => institution.users)
  @JoinColumn({ name: 'institutionId' })
  institution: InstitutionsEntity;

  @Column()
  isAdmin: boolean;

  @Column()
  lastLogin: Date;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(data: Partial<Users>) {
    Object.assign(this, data);
  }
}
