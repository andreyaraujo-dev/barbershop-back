import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'addresses' })
export class Addresses {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  street: string;

  @Column()
  district: string;

  @Column()
  houseNumber: string;

  @Column()
  uf: string;

  @Column()
  zipCode: string;

  @Column()
  complement: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(data: Partial<Addresses>) {
    Object.assign(this, data);
  }
}
