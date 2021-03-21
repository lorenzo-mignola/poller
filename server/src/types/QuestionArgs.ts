import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class QuestionArgs {
  @Field()
  text!: string;

  @Field()
  pollId!: number;
}
