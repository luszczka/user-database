import { type ChangeEvent, useState, type ReactElement } from 'react';
import useUpdateProfile from '../../hooks/useUpdateProfile';

interface Props {
  username: string;
  id: string;
}

const UserNickname = ({ username, id }: Props): ReactElement => {
  const [value, setValue] = useState(username || '');
  const [isInputActive, setIsInputActive] = useState(false);

  const onButtonClick = (): void => {
    setIsInputActive(!isInputActive);
  };

  const onInputChange = (inputValue: ChangeEvent<HTMLInputElement>): void => {
    setValue(inputValue.target.value);
  };

  const onSubmit = (): void => {
    updateProfile();
    setIsInputActive(false);
  };

  console.log(value);
  const { updateProfile } = useUpdateProfile({ id, value });

  return (
    <div style={{ alignItems: 'center', display: 'flex', margin: '10px 0', width: '100%' }}>
      username:
      <div style={{ width: '100%' }}>
        {username ? (
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div>{username}</div>
            <button onClick={onButtonClick}>{isInputActive ? 'X' : 'change username'}</button>
            {isInputActive && (
              <div>
                <input
                  value={value}
                  onChange={(data) => {
                    onInputChange(data);
                  }}
                ></input>
                <button onClick={onSubmit}>click to update</button>
              </div>
            )}
          </div>
        ) : (
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div>no username</div>
            <button onClick={onButtonClick}>add username</button>
            {isInputActive && (
              <div>
                <input
                  value={value}
                  onChange={(data) => {
                    onInputChange(data);
                  }}
                ></input>
                <button onClick={onSubmit}>&rsaquo;</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserNickname;
