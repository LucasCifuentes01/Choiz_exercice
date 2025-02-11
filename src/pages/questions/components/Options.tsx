import { JSX } from 'react';
import {
  IQuestionOption,
  IQuestions,
  QuestionTypes,
} from '../models/question.model';
import dynamic from 'next/dynamic';
import SingleOption from './SingleOption';

const MultiSelectOption = dynamic(() => import('./MultiSelectOption'));
const TextOption = dynamic(() => import('./TextOption'));

interface IProps extends IQuestions {
  onChangeOption: ({
    id,
    value,
    optionsType,
  }: {
    id: string;
    value: string;
    optionsType: 'single' | 'multi';
  }) => void;
}

interface IOptionsProps {
  option: IQuestionOption;
  onChangeOption: ({
    id,
    value,
    optionsType,
  }: {
    id: string;
    value: string;
    optionsType: 'single' | 'multi';
  }) => void;
}

const optionVariants: Record<
  QuestionTypes,
  (props: IOptionsProps) => JSX.Element
> = {
  [QuestionTypes.MULTIPLE]: ({ option, onChangeOption }) => (
    <MultiSelectOption
      onSelectOption={onChangeOption}
      key={option.value}
      isMultiple
      {...option}
    />
  ),
  [QuestionTypes.SINGLE]: ({ option, onChangeOption }) => (
    <SingleOption
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
