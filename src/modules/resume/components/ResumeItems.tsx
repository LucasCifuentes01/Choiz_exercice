interface IProps {
  question: string;
  answer: string[];
}

const ResumeItems = ({ question, answer }: IProps) => {
  return (
    <div>
      <p className='text-primary_800 text-m font-bold'> {question} </p>
      <p className='pl-2 text-m text-secondary_300'> {answer.join(', ')} </p>
    </div>
  );
};

export default ResumeItems;
