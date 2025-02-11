import { mockedQuestions } from '@/mocks/questions.mock';
import { IQuestion } from '@/pages/questions/models/question.model';
import { NextResponse } from 'next/server';

type ResponseData = {
  totalSteps: number;
  question?: IQuestion;
};

export const GET = async (
  request: Request,
  params: { params: { step: string } },
): Promise<NextResponse<ResponseData>> => {
  console.log('params: ', params);
  const step = (await params).params.step;

  const mockedResponse: ResponseData = {
    totalSteps: mockedQuestions.length + 2,
    question: mockedQuestions.find(
      (question) => question.step === Number(step),
    ),
  };

  return NextResponse.json({ ...mockedResponse });
};
