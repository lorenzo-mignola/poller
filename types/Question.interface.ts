import Answer from './Answer.interface';
import Poll from './Poll.interface';

export default interface Question {
  id: number;

  text: string;

  updatedDate: Date;

  poll: Required<Poll>;

  answers: Required<Answer[] | Promise<Answer[]>>;
}
