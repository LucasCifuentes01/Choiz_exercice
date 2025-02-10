import Button from '@/common/components/button/Button';
import { ImagesSizes } from '../models/imagesSizes.model';
import { ButtonTypes } from '@/common/components/button/button.model';
import dynamic from 'next/dynamic';

const BigPillsSVG = dynamic(() => import('svg/BigPillsSVG'));
const MediumPillsSVG = dynamic(() => import('svg/MediumPillsSVG'));
const SmallPillsSVG = dynamic(() => import('svg/SmallPillsSVG'));

interface IProps {
  title: string;
  description: string;
  imageSize: ImagesSizes;
}

const images = {
  [ImagesSizes.BIG]: <BigPillsSVG />,
  [ImagesSizes.MEDIUM]: <MediumPillsSVG />,
  [ImagesSizes.SMALL]: <SmallPillsSVG />,
};

const RecomedationComponent = ({ title, description, imageSize }: IProps) => {
  const handleClick = () => {};

  return (
    <div className='shadow-soft rounded-3 p-3'>
      <h2 className='question-title mt-0'>{title}</h2>
      <p className='text-m text-secondary_300'>{description}</p>
      <div className='my-3 flex flex-col items-center'>{images[imageSize]}</div>
      <Button type={ButtonTypes.SOLID} onClick={handleClick}>
        Seleccionar
      </Button>
    </div>
  );
};

export default RecomedationComponent;
