import { create } from 'zustand';

export interface IQuestionComplete {
  step: number;
  title: string;
  selectedOptions: { id: string; value: string }[];
}

interface IStore {
  questions: IQuestionComplete[];
  addQuestion: ({
    id,
    value,
    step,
    title,
  }: {
    id: string;
    value: string;
    step: number;
    title: string;
  }) => void;
}

export const useQuestionsStore = create<IStore>((set) => ({
  questions: [],
  addQuestion: (question) =>
    set((state) => {
      const stepIndex = state.questions.findIndex(
        (q) => q.step === question.step,
      );
      const questions = [...state.questions];

      if (stepIndex !== -1) {
        if (!questions[stepIndex]) {
          questions[stepIndex] = {
            selectedOptions: [],
            step: question.step,
            title: question.title,
          };
        }
        if (
          questions[stepIndex].selectedOptions.find(
            (opt) => opt.id === question.id,
          )
        ) {
          questions[stepIndex].selectedOptions = questions[
            stepIndex
          ].selectedOptions.filter((opts) => opts.id !== question.id);
        } else {
          questions[stepIndex].selectedOptions.push({
            id: question.id,
            value: question.value,
          });
        }

        return {
          questions,
        };
      }

      questions.push({
        selectedOptions: [],
        step: question.step,
        title: question.title,
      });
      questions[questions.length - 1].selectedOptions.push({
        id: question.id,
        value: question.value,
      });
      return {
        questions,
      };
      // ({ questions: [...state.questions, question.value] })
    }), // Mejorar! Si ya existe en el arr la question modificarla y si no agregarla al arr
}));
