import ArrowSVG from 'svg/ArrowSVG';
import ChoizBlackLogoSVG from 'svg/ChoizBlackLogoSVG';
import WhatsappSVG from 'svg/WhatsappSVG';
import { useStepStore } from '../store/step.store';
import { APP_PATHS } from '@/common/constants/app_paths';
import { redirect } from 'next/navigation';

const HeaderQuestions = () => {
  const { step, decrementStep } = useStepStore();

  const handleBackClick = () => {
    if (step === 1) {
      return redirect(APP_PATHS.WELCOME);
    }

    decrementStep();
  };

  return (
    <div className='mb-2 flex w-full items-center justify-between'>
      <div onClick={handleBackClick}>
        <ArrowSVG />
      </div>

      <ChoizBlackLogoSVG />
      <WhatsappSVG />
    </div>
  );
};

export default HeaderQuestions;
