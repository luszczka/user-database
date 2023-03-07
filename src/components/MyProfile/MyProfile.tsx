/* eslint-disable @typescript-eslint/naming-convention */
import { type ReactElement } from 'react';
import { type ProfileData } from '../../dataTypes/Types';
import useSessionProvider from '../../hooks/useSessionProvider';
import UserAvatar from './UserAvatar';
import UserID from './UserID';
import UserNickname from './UserNickname';
import UserWebsite from './UserWebsite';

interface Props {
  data: ProfileData[];
}

const MyProfile = ({ data }: Props): ReactElement => {
  const { session } = useSessionProvider();
  const mySessionId = session?.user.id;
  if (!data) {
    return <div>no data</div>;
  }

  const arrayOfUsers = data.map(({ id }) => id);
  const myProfileIndex = arrayOfUsers.findIndex((matchId) => matchId === mySessionId);

  const { id, username, avatar_url, website } = data[myProfileIndex];

  return (
    <div>
      <UserID id={id} />
      <UserNickname username={username} />
      <UserAvatar avatar_url={avatar_url} />
      <UserWebsite website={website} />
    </div>
  );
};

export default MyProfile;
