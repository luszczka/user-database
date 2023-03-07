/* eslint-disable @typescript-eslint/naming-convention */
import { type ReactElement } from 'react';

interface Props {
  avatar_url: string;
}

const UserAvatar = ({ avatar_url }: Props): ReactElement => {
  return (
    <div style={{ alignItems: 'center', display: 'flex', margin: '10px 0', width: '100%' }}>
      photo:
      {avatar_url ? (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <img alt="photo" src={avatar_url} />
          <button>change photo</button>
        </div>
      ) : (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <img alt="photo-placeholder" src="/photo-placeholder" />
          <button>add photo</button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
