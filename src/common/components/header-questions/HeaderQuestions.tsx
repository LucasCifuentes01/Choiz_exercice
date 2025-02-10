import ArrowSVG from 'svg/ArrowSVG';
import ChoizBlackLogoSVG from 'svg/ChoizBlackLogoSVG';
import WhatsappSVG from 'svg/WhatsappSVG';
import { useRouter } from 'next/navigation';

interface IProps {
  onBack?: () => void;
}

const HeaderQuestions = ({ onBack }: IProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    if (onBack) return onBack();

    router.back();
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
