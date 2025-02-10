'use client';

import Loading from '@/common/components/loading/Loading';
import HeaderQuestions from '../components/HeaderQuestions';
import { useGetQuestions } from '../queries';
import Question from '../components/Question';
import { useStepStore } from '../store/step.store';

const QuestionsPage = () => {
  const { step } = useStepStore();
  const { data, isLoading } = useGetQuestions(step);

  const question = data?.question;
  const totalSteps = data?.totalSteps;

  return (
    <div className='p-2'>
      <HeaderQuestions />
      {isLoading && (
        <div className='flex h-full w-full items-center justify-center'>
          <Loading />
        </div>
      )}
      {!isLoading && question && totalSteps && (
        <Question totalSteps={totalSteps} {...question} />
      )}
    </div>
  );
};

export default QuestionsPage;
