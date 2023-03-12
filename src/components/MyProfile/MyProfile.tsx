/* eslint-disable @typescript-eslint/naming-convention */
import { type ReactElement } from 'react';
import { type ProfileData } from '../../dataTypes/Types';
import useSessionProvider from '../../hooks/useSessionProvider';
import UserAvatar from './UserAvatar';
import UserID from './UserID';
import UserProp from './UserProp';

interface Props {
  data: ProfileData[];
  updateProfileData: () => void;
}

const MyProfile = ({ data, updateProfileData }: Props): ReactElement => {
  const { session } = useSessionProvider();

  const mySessionId = session?.user.id;
  if (!data) {
    return <div>no data</div>;
  }

  const arrayOfUsers = data.map(({ id }) => id);

  const myProfileIndex = arrayOfUsers.findIndex((matchId) => matchId === mySessionId);
  const { id, username, avatar_url, website, name, surname, country } = data[myProfileIndex];

  return (
    <div>
      <UserID id={id} />
      <UserAvatar avatar_url={avatar_url} />
      <UserProp userPropName="username" userPropValue={username} id={id} updateProfileData={updateProfileData} />
      <UserProp userPropName="website" userPropValue={website} id={id} updateProfileData={updateProfileData} />
      <UserProp userPropName="name" userPropValue={name} id={id} updateProfileData={updateProfileData} />
      <UserProp userPropName="surname" userPropValue={surname} id={id} updateProfileData={updateProfileData} />
      <UserProp userPropName="country" userPropValue={country} id={id} updateProfileData={updateProfileData} />
    </div>
  );
};

export default MyProfile;
