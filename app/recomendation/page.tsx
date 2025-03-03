'use client';

import RecomendationPage from '@/modules/recomendation/pages/RecomendationPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Recomendation = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecomendationPage />
    </QueryClientProvider>
  );
};

export default Recomendation;
