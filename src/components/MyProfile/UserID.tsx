import { type ReactElement } from 'react';

interface Props {
  id: string;
}

const UserID = ({ id }: Props): ReactElement => {
  return (
    <div style={{ display: 'flex', margin: '10px 0' }}>
      your unique id: <div>{id ? `${id}` : 'no id'}</div>
    </div>
  );
};

export default UserID;
