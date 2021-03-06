import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { InstitutionsEntity } from './../../institutions/entities/institutions.entity';

@Entity({ name: 'services' })
export class ServicesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  description?: string;

  @Column()
  institutionId: string;

  @ManyToOne(() => InstitutionsEntity, (institution) => institution.services)
  @JoinColumn({ name: 'institutionId' })
  institution: InstitutionsEntity;

  @Column()
  duration: number;

  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(data: Partial<ServicesEntity>) {
    Object.assign(this, data);
  }
}
