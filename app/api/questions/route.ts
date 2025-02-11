import {
  dutaxidil_caps,
  dutaxidil_gel,
  minoxidil_caps,
} from '@/mocks/recomendations.mock';
import { IQuestionComplete } from '@/modules/questions/store/questions.store';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const { body }: { body: IQuestionComplete[] } = await request.json();
  const step3 = body.find((steps: any) => steps.step === 3);
  const ids = step3?.selectedOptions.map((opt) => opt.id);

  if (ids?.includes('breast_cancer') || ids?.includes('prostate_cancer')) {
    return NextResponse.json({ recomendation: minoxidil_caps });
  }

  if (ids?.includes('none')) {
    return NextResponse.json({ recomendation: dutaxidil_caps });
  }

  if (ids && ids?.length > 0) {
    return NextResponse.json({ recomendation: dutaxidil_gel });
  }

  return NextResponse.json({
    message: {
      title: 'No se encontró una recomendación adecuada, intente nuevamente',
    },
  });
};
