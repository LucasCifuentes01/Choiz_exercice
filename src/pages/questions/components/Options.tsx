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
  id?: string;
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
  id?: string;
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
  [QuestionTypes.MULTIPLE]: ({ option, id, onChangeOption }) => (
    <MultiSelectOption
      onSelectOption={onChangeOption}
      key={option.value}
      isMultiple
      id={id}
      {...option}
    />
  ),
  [QuestionTypes.SINGLE]: ({ option, id, onChangeOption }) => (
    <SingleOption
      key={option.value}
      onSelectOption={onChangeOption}
      id={id}
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
      {data.map((option, index) =>
        optionVariants[type]({ option, id: `option-${index}`, onChangeOption }),
      )}
    </div>
  );
};

export default Options;
