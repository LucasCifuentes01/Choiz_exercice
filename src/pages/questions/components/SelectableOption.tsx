import CheckSVG from 'svg/CheckSVG';
import { IQuestionOption } from '../models/question.model';
import { useQuestionsStore } from '../store/questions.store';
import { useStepStore } from '../store/step.store';

interface IProps extends IQuestionOption {
  isMultiple?: boolean;
  onSelectOption: ({ id, value }: { id: string; value: string }) => void;
}

const SelectableOption = ({
  isMultiple,
  label,
  value,
  onSelectOption,
}: IProps) => {
  const { step } = useStepStore();
  const { questions } = useQuestionsStore();

  const alreadyChecked = !!questions
    .find((question) => question.step === step)
    ?.selectedOptions.find((opt) => opt.id === value);

  const handleSelectOption = () => {
    onSelectOption({ id: value, value: label });
  };

  return (
    <div
      className={`${alreadyChecked ? 'option-selected' : 'option'} cursor-pointer`}
      onClick={handleSelectOption}
    >
      <div className='inline-flex items-center'>
        <label className='relative flex cursor-pointer items-center'>
          <input
            id={value}
            onChange={handleSelectOption}
            checked={alreadyChecked}
            type={isMultiple ? 'checkbox' : 'radio'}
            className='peer h-5 w-5 appearance-none rounded-full border border-slate-300 bg-slate-100 transition-all'
          />
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100'>
            <CheckSVG />
          </span>
        </label>
      </div>
      <p className='text-s font-normal text-secondary_600'> {label} </p>
    </div>
  );
};

export default SelectableOption;
