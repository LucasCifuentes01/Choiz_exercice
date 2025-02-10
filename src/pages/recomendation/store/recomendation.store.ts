import { create } from 'zustand';
import { ImagesSizes } from '../models/imagesSizes.model';

interface IRecomendation {
  title: string;
  description: string;
  imageSize: ImagesSizes;
}

interface IStore {
  recomendation: IRecomendation | null;
  setRecomendation: (recomendation: IRecomendation) => void;
}

export const useRecomendationStore = create<IStore>((set) => ({
  recomendation: null,
  setRecomendation: (recomendation) => set(() => ({ recomendation })),
}));
