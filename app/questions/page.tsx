'use client';
import QuestionsPage from '@/modules/questions/pages/QuestionsPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Questions() {
  return (
    <QueryClientProvider client={queryClient}>
      <QuestionsPage />
    </QueryClientProvider>
  );
}
