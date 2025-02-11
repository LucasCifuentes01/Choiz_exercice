import { ImagesSizes } from '@/modules/recomendation/models/imagesSizes.model';

export interface IPostQuestionSchema {
  title: string;
  description: string;
  imageSize: ImagesSizes;
}
