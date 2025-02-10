import { API_PATHS } from '@/common/constants/api_paths';
import { getApiTransport } from '@/settings/transport';
import { IGetQuestionsSchema } from './models/getQuestions.model';
import { IQuestionComplete } from './store/questions.store';

export const getQuestions = async (step: number) => {
  const url = `${API_PATHS.QUESTIONS.INDEX}/${step}`;

  const response = await getApiTransport().get<IGetQuestionsSchema>(url);

  return response.data;
};

export const postQuestions = async (body: IQuestionComplete[]) => {
  const url = API_PATHS.QUESTIONS.INDEX;

  const response = await getApiTransport().post(url, {
    body,
  });
};
