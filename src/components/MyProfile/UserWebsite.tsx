import { type ReactElement } from 'react';

interface Props {
  website: string;
}

const UserWebsite = ({ website }: Props): ReactElement => {
  return (
    <div style={{ alignItems: 'center', display: 'flex', margin: '10px 0', width: '100%' }}>
      links:
      <div style={{ width: '100%' }}>
        {website ? (
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div>{website}</div>
            <button>change website</button>
          </div>
        ) : (
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div>no links</div>
            <button>add website</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserWebsite;
