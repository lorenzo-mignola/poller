/* eslint-disable */
import Question from './Question.interface';

export default interface Poll {
  id: number;

  name: string;

  updatedDate: Date;

  questions: Required<Question[] | Promise<Question[]>>;
}
