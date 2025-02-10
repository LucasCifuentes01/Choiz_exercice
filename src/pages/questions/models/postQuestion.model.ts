import { ImagesSizes } from '@/pages/recomendation/models/imagesSizes.model';

export interface IPostQuestionSchema {
  title: string;
  description: string;
  imageSize: ImagesSizes;
}
