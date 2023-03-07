import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../utils/paths';

const Navigation = (): ReactElement => {
  return (
    <div>
      <Link to={paths.dashboard}>Dashboard</Link>
      <Link to={paths.loginPage}>Log out</Link>
    </div>
  );
};

export default Navigation;
