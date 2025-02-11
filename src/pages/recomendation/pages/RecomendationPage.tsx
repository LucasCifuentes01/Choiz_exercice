'use client';

import HeaderQuestions from '@/common/components/header-questions/HeaderQuestions';
import Loading from '@/common/components/loading/Loading';
import ProgressBar from '@/pages/questions/components/ProgressBar';
import { usePostQuestions } from '@/pages/questions/queries';
import { useQuestionsStore } from '@/pages/questions/store/questions.store';
import { useEffect } from 'react';
import Faqs from '../components/Faqs';
import RecomedationComponent from '../components/RecomedationComponent';

const RecomendationPage = () => {
  const { questions } = useQuestionsStore();
  const { data, isPending, mutate } = usePostQuestions();

  useEffect(() => {
    mutate(questions);
  }, []);

  return (
    <div className='p-2'>
      <div>
        <HeaderQuestions />
        <ProgressBar total={6} current={5} />
      </div>
      {isPending && (
        <div className='mt-4 flex h-full w-full items-center justify-center'>
          <Loading />
        </div>
      )}
      {!isPending && (
        <div className='flex flex-col gap-3'>
          <h1 id='question-title' className='question-title'>
            Tratamiento recomendado en base a tus respuestas
          </h1>
          {data?.recomendation && (
            <RecomedationComponent {...data.recomendation} />
          )}
          <Faqs />
        </div>
      )}
    </div>
  );
};

export default RecomendationPage;
