'use client';

import Button from '@/common/components/button/Button';
import { ButtonTypes } from '@/common/components/button/button.model';
import { APP_PATHS } from '@/common/constants/app_paths';
import StepsList from './StepsList';
import { useRouter } from 'next/navigation';

const BottomSheet = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(APP_PATHS.QUESTIONS);
  };

  return (
    <div
      style={{ height: '40%' }}
      className='absolute bottom-0 w-full rounded-[32px] bg-white px-4 pt-6'
    >
      <div className='flex flex-col gap-1'>
        <h1 className='text-xl font-medium text-primary_600'>
          Bienvenido a Choiz
        </h1>
        <h2 className='text-secondary_600'>
          Comienza tu tratamiento en tres pasos:
        </h2>
      </div>
      <StepsList />
      <Button
        id='home_continue_button'
        onClick={handleClick}
        type={ButtonTypes.SOLID}
      >
        Continuar
      </Button>
    </div>
  );
};

export default BottomSheet;
