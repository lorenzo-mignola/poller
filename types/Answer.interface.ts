import Question from './Question.interface';

export default interface Answer {
  id: number;

  updatedDate: Date;

  question: Required<Question>;
}
