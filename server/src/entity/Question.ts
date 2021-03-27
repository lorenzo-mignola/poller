import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Answer } from './Answer';
import { Poll } from './Poll';

@Entity()
@ObjectType()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  id!: number;

  @Column()
  @Field()
  text!: string;

  @UpdateDateColumn()
  @Field()
  updatedDate!: Date;

  @Field(type => Poll)
  @ManyToOne(type => Poll, poll => poll.id, { lazy: true })
  poll!: Poll;

  @OneToMany(type => Answer, answer => answer.question, {
    onDelete: 'CASCADE'
  })
  @Field(type => [Answer])
  answers!: Promise<Answer[]>;
}
