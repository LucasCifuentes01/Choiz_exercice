import { mockedQuestions } from '@/mocks/questions.mock';
import { IQuestion } from '@/modules/questions/models/question.model';
import { NextResponse } from 'next/server';

type ResponseData = {
  totalSteps: number;
  question?: IQuestion;
};

export const GET = async (
  request: Request,
  context: { params: Promise<{ step: string }> },
): Promise<NextResponse<ResponseData>> => {
  const { params } = await context;
  const step = (await params).step;

  const mockedResponse: ResponseData = {
    totalSteps: mockedQuestions.length + 2,
    question: mockedQuestions.find(
      (question) => question.step === Number(step),
    ),
  };

  return NextResponse.json({ ...mockedResponse });
};
