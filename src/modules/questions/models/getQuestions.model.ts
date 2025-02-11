import { IQuestion } from './question.model';

export interface IGetQuestionsSchema {
  totalSteps: number;
  question?: IQuestion;
}
