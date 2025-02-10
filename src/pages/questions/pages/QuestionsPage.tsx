'use client';

import Loading from '@/common/components/loading/Loading';
import { useGetQuestions } from '../queries';
import Question from '../components/Question';
import { useStepStore } from '../store/step.store';
import HeaderQuestions from '@/common/components/header-questions/HeaderQuestions';
import { APP_PATHS } from '@/common/constants/app_paths';
import { redirect, useRouter } from 'next/navigation';

const QuestionsPage = () => {
  const { step, decrementStep } = useStepStore();
  const { data, isLoading } = useGetQuestions(step);
  const router = useRouter();

  const question = data?.question;
  const totalSteps = data?.totalSteps;

  const handleBack = () => {
    if (step === 1) {
      return router.push(APP_PATHS.WELCOME);
    }

    decrementStep();
  };

  return (
    <div className='p-2'>
      <HeaderQuestions onBack={handleBack} />
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
