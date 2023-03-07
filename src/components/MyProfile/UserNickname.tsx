import { type ReactElement } from 'react';

interface Props {
  username: string;
}

const UserNickname = ({ username }: Props): ReactElement => {
  return (
    <div style={{ alignItems: 'center', display: 'flex', margin: '10px 0', width: '100%' }}>
      username:
      <div style={{ width: '100%' }}>
        {username ? (
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div>{username}</div>
            <button>change username</button>
          </div>
        ) : (
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div>no username</div>
            <button>add username</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserNickname;
