import { type ReactElement, type HTMLProps, type ChangeEvent } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  onChange: (inputValue: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

const Input = ({ onChange, placeholder, value, ...rest }: Props): ReactElement => {
  return <input placeholder={placeholder} onChange={onChange} value={value} {...rest} />;
};

export default Input;
