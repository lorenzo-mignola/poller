import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
@ObjectType()
export class Poll extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  id!: number;

  @Column()
  @Field()
  name!: string;

  @UpdateDateColumn()
  @Field()
  updatedDate!: Date;
}
