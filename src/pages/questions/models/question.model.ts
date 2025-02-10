export interface IQuestion {
  step: number;
  title: string;
  description?: string;
  options: IQuestions;
}

export interface IQuestions {
  type: QuestionTypes;
  data: IQuestionOption[];
}

export interface IQuestionOption {
  label: string;
  value: string;
}

export enum QuestionTypes {
  MULTIPLE = 'multiple',
  SINGLE = 'single',
  TEXT = 'text',
}
