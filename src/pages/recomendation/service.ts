import { API_PATHS } from '@/common/constants/api_paths';
import { getApiTransport } from '@/settings/transport';
import { FaqsSchema } from './models/faq.model';

export const getFaqs = async () => {
  const url = API_PATHS.FAQS.INDEX;

  const response = await getApiTransport().get<{ faqs: FaqsSchema[] }>(url);

  return response.data;
};
