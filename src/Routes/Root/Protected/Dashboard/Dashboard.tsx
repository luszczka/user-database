/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, type ReactElement } from 'react';
import MyProfile from '../../../../components/MyProfile/MyProfile';
import useProfiles from '../../../../hooks/useProfiles';
import useSignOut from '../../../../hooks/useSignOut';
import { isAdmin } from '../../../../utils/isAdmin';

const Dashboard = (): ReactElement => {
  const { signOut } = useSignOut();
  const admin = isAdmin();
  const { data, getProfiles } = useProfiles();

  const [isDataShowed, setIsDataShowed] = useState(false);

  const showUserData = (): void => {
    getProfiles();
    setIsDataShowed(!isDataShowed);
  };

  const updateProfileData = (): void => {
    getProfiles();
  };

  return (
    <div>
      <div>Dashboard</div>
      {admin && (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          jestes adminem<span style={{ fontSize: '40px', color: 'gold' }}>&#8795;</span>
        </div>
      )}
      <div style={{ margin: '10px 0' }}>
        <button style={{ backgroundColor: '#5B2E48' }} onClick={signOut}>
          log me out
        </button>
      </div>
      <div style={{ margin: '10px 0' }}>
        <button onClick={showUserData}>{isDataShowed ? 'hide my data' : 'show my data'}</button>
      </div>
      {isDataShowed && (
        <div>
          <MyProfile data={data} updateProfileData={updateProfileData} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
