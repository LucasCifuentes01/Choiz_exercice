interface IProps {
  total: number;
  current: number;
}

const ProgressBar = ({ total, current }: IProps) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className='w-full'>
      <div className='relative h-[3px] w-full rounded-full bg-neutral_300'></div>
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`relative bottom-[3px] h-[3px] rounded-full bg-primary_600`}
      ></div>
    </div>
  );
};

export default ProgressBar;
