import { IQuestionOption } from '../models/question.model';
import { useQuestionsStore } from '../store/questions.store';
import { useStepStore } from '../store/step.store';

interface IProps extends IQuestionOption {
  onSelectOption: ({
    id,
    value,
    optionsType,
  }: {
    id: string;
    value: string;
    optionsType: 'single' | 'multi';
  }) => void;
  id?: string;
}

const SingleOption = ({ label, value, id, onSelectOption }: IProps) => {
  const { step } = useStepStore();
  const { questions } = useQuestionsStore();

  const handleSelectOption = () => {
    onSelectOption({ id: value, value: label, optionsType: 'single' });
  };

  const alreadyChecked = !!questions
    .find((question) => question.step === step)
    ?.selectedOptions.find((opt) => opt.id === value);

  return (
    <div
      id={id}
      className={`${alreadyChecked ? 'option-selected' : 'option'} cursor-pointer`}
      onClick={handleSelectOption}
    >
      <label htmlFor={value} className='text-s font-normal text-secondary_600'>
        {label}
      </label>
    </div>
  );
};

export default SingleOption;
