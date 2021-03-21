import { Field, InputType } from 'type-graphql';

@InputType()
export class PollInput {
  @Field()
  name!: string;
}
