import { type ReactNode, type ReactElement, type DetailedHTMLProps, type ButtonHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ onClick, children, ...rest }: Props): ReactElement => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
