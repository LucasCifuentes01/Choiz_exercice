import { PropsWithChildren } from 'react';
import { ButtonTypes } from './button.model';
import dynamic from 'next/dynamic';

const SolidButton = dynamic(() => import('./variants/SolidButton'));

interface IProps extends PropsWithChildren {
  type: ButtonTypes;
  disabled?: boolean;
  id?: string;
  onClick: () => void;
}

interface IButtonVariants extends PropsWithChildren {
  onClick: () => void;
  disabled?: boolean;
  id?: string;
}

const buttonVariants = {
  [ButtonTypes.SOLID]: ({ children, ...props }: IButtonVariants) => (
    <SolidButton {...props}>{children}</SolidButton>
  ),
};

const Button = ({ children, type, ...props }: IProps) => {
  return buttonVariants[type]?.({ children, ...props }) || null;
};

export default Button;
