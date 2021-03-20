import { Query, Resolver } from 'type-graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Poll } from '../entity/Poll';

@Resolver(of => Poll)
export class PollResolver {
  constructor(
    @InjectRepository(Poll) private readonly pollRepository: Repository<Poll>
  ) {}

  @Query(returns => [Poll])
  async allPolls() {
    // console.log('clg -> allPolls -> pollRepository', this.pollRepository);
    // return await this.pollRepository.find();

    return Poll.find();
  }
}
