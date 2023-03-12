import { type ChangeEvent, useState, type ReactElement } from 'react';
import useUpdateProfile from '../../hooks/useUpdateProfile';
import Button from '../Button/Button';
import Input from '../Input/Input';

interface Props {
  userPropName: string;
  userPropValue: string;
  id: string;
  updateProfileData: () => void;
}

const UserProp = ({ userPropName, userPropValue, id, updateProfileData }: Props): ReactElement => {
  const [value, setValue] = useState(userPropValue || '');
  const [isInputActive, setIsInputActive] = useState(false);

  const { updateProfile, isLoading } = useUpdateProfile({ id, userPropName, value });

  const onButtonClick = (): void => {
    setIsInputActive(!isInputActive);
  };

  const onInputChange = (inputChange: ChangeEvent<HTMLInputElement>): void => {
    setValue(inputChange.target.value);
  };

  const onSubmit = (): void => {
    updateProfile().then(updateProfileData);
    setIsInputActive(false);
  };

  return (
    <div style={{ alignItems: 'center', display: 'flex', margin: '10px 0', width: '100%' }}>
      {userPropName}:
      <div style={{ width: '100%' }}>
        {userPropValue ? (
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ opacity: isLoading ? '0.2' : '1' }}>{userPropValue}</div>
            <Button onClick={onButtonClick}>{isInputActive ? 'X' : `change ${userPropName}`}</Button>
            {isInputActive && (
              <div>
                <Input
                  value={value}
                  onChange={(data) => {
                    onInputChange(data);
                  }}
                ></Input>
                <Button onClick={onSubmit}>click to update</Button>
              </div>
            )}
          </div>
        ) : (
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div>no {userPropName}</div>
            <Button onClick={onButtonClick}>add {userPropName}</Button>
            {isInputActive && (
              <div>
                <Input
                  value={value}
                  onChange={(data) => {
                    onInputChange(data);
                  }}
                ></Input>
                <Button onClick={onSubmit}>click to update</Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProp;
