'use client';

import Button from '@/common/components/button/Button';
import ClockSVG from '../../../../public/svg/ClockSVG';
import { ButtonTypes } from '@/common/components/button/button.model';
import { redirect } from 'next/navigation';
import { APP_PATHS } from '@/common/constants/app_paths';

const BottomSheet = () => {
  const handleClick = () => {
    redirect(APP_PATHS.QUESTIONS);
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
      <ul className='mb-3 mt-3 flex flex-col gap-2 text-s text-secondary_300'>
        <li className='flex gap-2'>
          Completa tu expediente médico
          <span className='flex items-center gap-1 text-primary_300'>
            <ClockSVG /> 2 min
          </span>
        </li>
        <li>Explora las opciones de tratamiento</li>
        <li>Paga y recibe tu tratamiento</li>
      </ul>
      <Button onClick={handleClick} type={ButtonTypes.SOLID}>
        Continuar
      </Button>
    </div>
  );
};

export default BottomSheet;
