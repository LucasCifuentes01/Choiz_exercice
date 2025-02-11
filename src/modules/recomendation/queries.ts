import { useQuery } from '@tanstack/react-query';
import { getFaqs } from './service';

export const useGetFaqs = () => {
  return useQuery({
    queryKey: ['getFaqs'],
    queryFn: async () => await getFaqs(),
  });
};
