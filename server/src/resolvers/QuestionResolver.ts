import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql';
import { Poll } from '../entity/Poll';
import { Question } from '../entity/Question';
import { QuestionArgs } from '../types/QuestionArgs';

@Resolver(of => Question)
export class QuestionResolver {
  @Query(returns => [Question])
  questions() {
    return Question.find();
  }

  @Query(returns => Question)
  question(@Arg('id') id: number) {
    return Question.findOne({ where: { id } });
  }

  @Mutation(returns => Question)
  async addQuestion(@Args() { pollId, text }: QuestionArgs) {
    const newQuestion = new Question();
    const poll = await Poll.findOne(pollId);
    if (poll) {
      newQuestion.poll = poll;
      newQuestion.text = text;
      const insertResult = await Question.insert(newQuestion);
      return Question.findOne(insertResult.identifiers[0]);
    }
    throw new Error('Poll not found');
  }

  @Mutation(returns => Number)
  async removeQuestion(@Arg('id') id: number) {
    const deleteResult = await Question.delete(id);
    return deleteResult.affected;
  }
}
