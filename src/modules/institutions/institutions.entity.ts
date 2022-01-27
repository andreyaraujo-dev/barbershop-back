import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
  payments_methods: string;

  @Column({ type: 'varchar', length: 80 })
  opening_hours: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(data: Partial<InstitutionsEntity>) {
    Object.assign(this, data);
  }
}
