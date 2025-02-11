interface IProps {
  title: string;
  description: string;
}

const FaqComponent = ({ title, description }: IProps) => {
  return (
    <section className='mx-4 border-b py-2 last:border-b-0'>
      <label className='w-full'>
        <input
          className='peer/showLabel absolute w-full scale-0'
          type='checkbox'
        />
        <span className='text-primary_800 no-scrollbar block max-h-14 w-full overflow-auto rounded-lg transition-all duration-300 peer-checked/showLabel:max-h-52'>
          <h3 className='flex h-14 max-h-14 w-full cursor-pointer items-center overflow-auto font-bold'>
            {title}
          </h3>
          <p className='h-full w-full'>{description}</p>
        </span>
      </label>
    </section>
  );
};

export default FaqComponent;
