import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Poll } from '../entity/Poll';
import { PollInput } from './../types/PollInput';

@Resolver(of => Poll)
export class PollResolver {
  @Query(returns => [Poll])
  polls() {
    return Poll.find();
  }

  @Query(returns => Poll)
  poll(@Arg('id') id: number) {
    return Poll.findOne({ where: { id } });
  }

  @Mutation(returns => Poll)
  async addPoll(@Arg('newPoll') newPollInput: PollInput) {
    const newPoll = new Poll();
    newPoll.name = newPollInput.name;
    const insertResult = await Poll.insert(newPoll);
    return Poll.findOne(insertResult.identifiers[0]);
  }

  @Mutation(returns => Number)
  async removePoll(@Arg('id') id: number) {
    const deleteResult = await Poll.delete(id);
    return deleteResult.affected;
  }
}
