import Button from '@/common/components/button/Button';
import { IQuestion } from '../models/question.model';
import Options from './Options';
import ProgressBar from './ProgressBar';
import { ButtonTypes } from '@/common/components/button/button.model';
import { useQuestionsStore } from '../store/questions.store';
import { useStepStore } from '../store/step.store';
import { redirect } from 'next/navigation';
import { APP_PATHS } from '@/common/constants/app_paths';
import TextOption from './TextOption';
import { usePostQuestions } from '../queries';
import Loading from '@/common/components/loading/Loading';

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
  const { mutate, isPending } = usePostQuestions();
  const { step: storeStep, incrementStep } = useStepStore();
  const { questions, addQuestion } = useQuestionsStore();

  const disabledButton = !questions.find((q) => q.step === storeStep)
    ?.selectedOptions.length;

  const showTextOption = questions.find((question) =>
    question.selectedOptions.find((opt) => opt.id === 'other'),
  );

  const handleContinueClick = () => {
    if (step === totalSteps) {
      mutate(questions);
    }

    incrementStep();
  };

  const handleChangeOption = ({ id, value }: { id: string; value: string }) => {
    addQuestion({ id, value, step: storeStep });
  };

  if (isPending)
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <Loading />
      </div>
    );

  return (
    <div>
      <ProgressBar current={step} total={totalSteps + 1} />
      <div className='mb-3 flex flex-col gap-1'>
        <h1 className='text-primary_800 mt-4 text-l font-bold'> {title} </h1>
        <p className='text-s text-secondary_300'> {description} </p>
      </div>
      <Options onChangeOption={handleChangeOption} {...options} />
      {showTextOption && <TextOption onChange={handleChangeOption} />}
      <div className='fixed bottom-[32px] left-0 w-full px-2'>
        <Button
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
