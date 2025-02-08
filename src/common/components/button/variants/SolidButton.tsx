import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  onClick: () => void;
}

const SolidButton = ({ children, onClick }: IProps) => {
  return (
    <button
      onClick={() => onClick?.()}
      className='w-full rounded-full bg-primary py-2 text-white'
    >
      {children}
    </button>
  );
};

export default SolidButton;
