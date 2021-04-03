import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import PollInterface from '../types/Poll.interface';
import { Question } from './Question';

@Entity()
@ObjectType()
export class Poll extends BaseEntity implements PollInterface {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  id!: number;

  @Column()
  @Field()
  name!: string;

  @UpdateDateColumn()
  @Field()
  updatedDate!: Date;

  @OneToMany(type => Question, question => question.poll, {
    lazy: true,
    onDelete: 'CASCADE'
  })
  @Field(type => [Question])
  questions!: Promise<Question[]>;
}
