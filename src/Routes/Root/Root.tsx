import { paths } from '../../utils/paths';
import { type ReactElement, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import useSessionProvider from '../../hooks/useSessionProvider';

const Root = (): ReactElement => {
  const navigate = useNavigate();
  const { session } = useSessionProvider();

  useEffect(() => {
    if (!session) {
      navigate(paths.loginPage);
    }
    if (session) {
      navigate(paths.dashboard);
    }
  }, [session]);

  return <Outlet />;
};

export default Root;
