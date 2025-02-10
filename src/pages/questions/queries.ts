import { useMutation, useQuery } from '@tanstack/react-query';
import { getQuestions, postQuestions } from './services';
import { IQuestionComplete } from './store/questions.store';
import { useRouter } from 'next/navigation';
import { APP_PATHS } from '@/common/constants/app_paths';

export const useGetQuestions = (step: number) => {
  return useQuery({
    queryKey: ['getQueries', step],
    queryFn: async () => await getQuestions(step),
  });
};

export const usePostQuestions = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ['postQueries'],
    mutationFn: async (body: IQuestionComplete[]) => await postQuestions(body),
    onSuccess: () => {
      router.push(APP_PATHS.RECOMENDATION);
    },
  });
};
