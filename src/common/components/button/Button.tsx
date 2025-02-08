import { PropsWithChildren } from 'react';
import { ButtonTypes } from './button.model';
import dynamic from 'next/dynamic';

const SolidButton = dynamic(() => import('./variants/SolidButton'));

interface IProps extends PropsWithChildren {
  type: ButtonTypes;
  onClick: () => void;
}

interface IButtonVariants extends PropsWithChildren {
  onClick: () => void;
}

const buttonVariants = {
  [ButtonTypes.SOLID]: ({ children, onClick }: IButtonVariants) => (
    <SolidButton onClick={onClick}> {children} </SolidButton>
  ),
};

const Button = ({ children, type, onClick }: IProps) => {
  return buttonVariants[type]?.({ children, onClick }) || null;
};

export default Button;
