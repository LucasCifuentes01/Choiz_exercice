import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  onClick: () => void;
  disabled?: boolean;
  id?: string;
}

const SolidButton = ({ children, disabled, onClick, ...props }: IProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      onClick={() => onClick?.()}
      className={`w-full rounded-full bg-neutral_600 py-2 text-white ${disabled ? 'opacity-25' : ''}`}
    >
      {children}
    </button>
  );
};

export default SolidButton;
