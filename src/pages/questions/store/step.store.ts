import { create } from 'zustand';

interface IStore {
  step: number;
  incrementStep: () => void;
  decrementStep: () => void;
}

export const useStepStore = create<IStore>((set) => ({
  step: 1,
  incrementStep: () => set((state) => ({ step: state.step + 1 })),
  decrementStep: () => set((state) => ({ step: state.step - 1 })),
}));
