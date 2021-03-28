import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import AnswerInterface from '../../../types/Answer.interface';
import { Question } from './Question';

@Entity()
@ObjectType()
export class Answer extends BaseEntity implements AnswerInterface {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  id!: number;

  @UpdateDateColumn()
  @Field()
  updatedDate!: Date;

  @Field(type => Question)
  @ManyToOne(type => Question, question => question.id, { lazy: true })
  question!: Question;
}
