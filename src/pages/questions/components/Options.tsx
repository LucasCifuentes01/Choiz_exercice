import { JSX } from 'react';
import {
  IQuestionOption,
  IQuestions,
  QuestionTypes,
} from '../models/question.model';
import dynamic from 'next/dynamic';

const SelectableOption = dynamic(() => import('./SelectableOption'));
const TextOption = dynamic(() => import('./TextOption'));

interface IProps extends IQuestions {
  onChangeOption: ({ id, value }: { id: string; value: string }) => void;
}

interface IOptionsProps {
  option: IQuestionOption;
  onChangeOption: ({ id, value }: { id: string; value: string }) => void;
}

const optionVariants: Record<
  QuestionTypes,
  (props: IOptionsProps) => JSX.Element
> = {
  [QuestionTypes.MULTIPLE]: ({ option, onChangeOption }) => (
    <SelectableOption
      onSelectOption={onChangeOption}
      key={option.value}
      isMultiple
      {...option}
    />
  ),
  [QuestionTypes.SINGLE]: ({ option, onChangeOption }) => (
    <SelectableOption
      key={option.value}
      onSelectOption={onChangeOption}
      {...option}
    />
  ),
  [QuestionTypes.TEXT]: ({ onChangeOption }) => (
    <TextOption onChange={onChangeOption} />
  ),
};

const Options = ({ type, data, onChangeOption }: IProps) => {
  return (
    <div className='flex flex-col gap-2'>
      {data.map((option) => optionVariants[type]({ option, onChangeOption }))}
    </div>
  );
};

export default Options;
