import Button from '@/common/components/button/Button';
import { IQuestion } from '../models/question.model';
import Options from './Options';
import ProgressBar from './ProgressBar';
import { ButtonTypes } from '@/common/components/button/button.model';
import { useQuestionsStore } from '../store/questions.store';
import { useStepStore } from '../store/step.store';
import { redirect, useRouter } from 'next/navigation';
import { APP_PATHS } from '@/common/constants/app_paths';
import TextOption from './TextOption';

interface IProps extends IQuestion {
  totalSteps: number;
}

const Question = ({
  title,
  options,
  step,
  description,
  totalSteps,
}: IProps) => {
  const router = useRouter();
  const { step: storeStep, incrementStep } = useStepStore();
  const { questions, addQuestion } = useQuestionsStore();

  const disabledButton = !questions.find((q) => q.step === storeStep)
    ?.selectedOptions.length;

  const showTextOption = questions
    ?.find((question) => question.step === storeStep)
    ?.selectedOptions.find((opt) => opt.id === 'other');

  const handleContinueClick = () => {
    if (step === totalSteps - 2) {
      router.push(APP_PATHS.RECOMENDATION);
    }

    incrementStep();
  };

  const handleChangeOption = ({
    id,
    value,
    optionsType,
  }: {
    id: string;
    value: string;
    optionsType?: 'single' | 'multi';
  }) => {
    addQuestion({
      id,
      value,
      step: storeStep,
      title,
      type: optionsType ?? 'multi',
    });
  };

  return (
    <div>
      <ProgressBar current={step} total={totalSteps} />
      <div className='mb-3 flex flex-col gap-1'>
        <h1 id='question-title' className='question-title'>
          {title}
        </h1>
        <p className='text-s text-secondary_300'> {description} </p>
      </div>
      <Options onChangeOption={handleChangeOption} {...options} />
      {showTextOption && <TextOption onChange={handleChangeOption} />}
      <div className='fixed bottom-[32px] left-0 w-full px-2'>
        <Button
          id='option-continue-button'
          disabled={disabledButton}
          onClick={handleContinueClick}
          type={ButtonTypes.SOLID}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Question;
