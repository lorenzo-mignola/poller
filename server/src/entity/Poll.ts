import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Poll {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @UpdateDateColumn()
  updatedDate!: Date;

  constructor() {}
}
