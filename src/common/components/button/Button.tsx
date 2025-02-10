import { PropsWithChildren } from 'react';
import { ButtonTypes } from './button.model';
import dynamic from 'next/dynamic';

const SolidButton = dynamic(() => import('./variants/SolidButton'));

interface IProps extends PropsWithChildren {
  type: ButtonTypes;
  disabled?: boolean;
  onClick: () => void;
}

interface IButtonVariants extends PropsWithChildren {
  onClick: () => void;
  disabled?: boolean;
}

const buttonVariants = {
  [ButtonTypes.SOLID]: ({ children, disabled, onClick }: IButtonVariants) => (
    <SolidButton disabled={disabled} onClick={onClick}>
      {children}
    </SolidButton>
  ),
};

const Button = ({ children, type, disabled, onClick }: IProps) => {
  return buttonVariants[type]?.({ children, disabled, onClick }) || null;
};

export default Button;
