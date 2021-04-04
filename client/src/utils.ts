import Question from '@/types/Question.interface';

export interface AnswerForChart {
  votes: number;
  label: string;
}

// eslint-disable-next-line import/prefer-default-export
export const getAnswerForChart = (
  questions: Question[],
): AnswerForChart[] => questions.map((i: Question) => ({
  votes: Array.isArray(i.answers) ? i.answers.length : 0,
  label: i.text,
}));
