'use client';

import HeaderQuestions from '@/common/components/header-questions/HeaderQuestions';
import ProgressBar from '@/pages/questions/components/ProgressBar';
import { useQuestionsStore } from '@/pages/questions/store/questions.store';
import RecomedationComponent from '@/pages/recomendation/components/RecomedationComponent';
import { useRecomendationStore } from '@/pages/recomendation/store/recomendation.store';
import ResumeItems from '@/pages/resume/components/ResumeItems';
import { useEffect, useState } from 'react';

const Resume = () => {
  const [responses, setResponses] = useState<
    { question: string; answer: string[] }[]
  >([]);
  const { questions } = useQuestionsStore();
  const { recomendation } = useRecomendationStore();

  useEffect(() => {
    setResponses(
      questions.map((opt) => ({
        question: opt.title,
        answer: opt.selectedOptions.map(
          (options_selected) => options_selected.value,
        ),
      })),
    );
  }, [questions]);

  return (
    <div className='p-2'>
      <HeaderQuestions />
      <ProgressBar total={1} current={1} />
      <h1 id='question-title' className='question-title mb-3 mt-2'>
        Resumen
      </h1>
      <div className='mb-3 flex flex-col gap-2'>
        {responses.map((response, index) => (
          <ResumeItems
            key={index}
            question={response.question}
            answer={response.answer}
          />
        ))}
      </div>
      {recomendation && <RecomedationComponent {...recomendation} isResume />}
    </div>
  );
};

export default Resume;
