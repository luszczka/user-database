/* eslint-disable @typescript-eslint/no-misused-promises */
import { type ReactElement, useState, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import useUserData from '../../../hooks/useUserData';
import { SupabasePaths } from '../../../utils/supabasePaths';
import { paths } from '../../../utils/paths';
import Input from '../../../components/Input/Input';

const RegisterPage = (): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const supabasePath = SupabasePaths.signUp;
  const { postData } = useUserData({ email, password, supabasePath });

  const updateEmailInput = (inputValue: ChangeEvent<HTMLInputElement>): void => {
    setEmail(inputValue.target.value);
  };

  const updatePasswordInput = (inputValue: ChangeEvent<HTMLInputElement>): void => {
    setPassword(inputValue.target.value);
  };
  return (
    <div>
      <div>Register page</div>
      <div>
        <Input
          value={email}
          onChange={(data) => {
            updateEmailInput(data);
          }}
          placeholder="email"
        />
      </div>
      <div>
        <Input
          value={password}
          onChange={(data) => {
            updatePasswordInput(data);
          }}
          placeholder="password"
        />
      </div>
      <div>
        <button onClick={postData}>register</button>
      </div>
      <div>
        <Link to={paths.loginPage}>log in</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
