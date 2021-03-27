import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Answer } from '../entity/Answer';
import { Question } from './../entity/Question';

@Resolver(of => Answer)
export class AnswerResolver {
  @Query(returns => [Answer])
  answers() {
    return Answer.find();
  }

  @Query(returns => Answer)
  answer(@Arg('id') id: number) {
    return Answer.findOne({ where: { id } });
  }

  @Mutation(returns => Answer)
  async addAnswer(@Arg('questionId') questionId: number) {
    const newAnswer = new Answer();
    const question = await Question.findOne(questionId);
    if (question) {
      newAnswer.question = question;
      const insertResult = await Answer.insert(newAnswer);
      return Answer.findOne(insertResult.identifiers[0]);
    } else {
      throw new Error('Question not found');
    }
  }

  @Mutation(returns => Number)
  async removeAnswer(@Arg('id') id: number) {
    const deleteResult = await Answer.delete(id);
    return deleteResult.affected;
  }
}
