import { create } from 'zustand';

export interface IQuestionComplete {
  step: number;
  title: string;
  selectedOptions: { id: string; value: string }[];
}

interface IAddQuestion {
  id: string;
  value: string;
  step: number;
  title: string;
  type?: 'multi' | 'single';
}

interface IStore {
  questions: IQuestionComplete[];
  addQuestion: (question: IAddQuestion) => void;
}

export const useQuestionsStore = create<IStore>((set) => ({
  questions: [],

  addQuestion: (question) =>
    set((state) => {
      const questions = [...state.questions];
      const stepIndex = questions.findIndex((q) => q.step === question.step);

      const toggleOption = (
        options: { id: string; value: string }[],
        id: string,
        value: string,
      ) => {
        if (question.type === 'single' || question.id === 'none') {
          return options.some((opt) => opt.id === id)
            ? options.filter((opt) => opt.id !== id)
            : [{ id, value }];
        }

        if (id === 'other') {
          const index = options.findIndex((opt) => opt.id === 'other');
          const newOptions = [...options];

          newOptions[index] = { id, value };
          return newOptions;
        }

        return options.some((opt) => opt.id === id)
          ? options.filter((opt) => opt.id !== id)
          : [...options, { id, value }];
      };

      if (stepIndex !== -1) {
        questions[stepIndex] = {
          ...questions[stepIndex],
          selectedOptions: toggleOption(
            questions[stepIndex].selectedOptions,
            question.id,
            question.value,
          ),
        };
      } else {
        questions.push({
          step: question.step,
          title: question.title,
          selectedOptions: [{ id: question.id, value: question.value }],
        });
      }

      return { questions };
    }),
}));
