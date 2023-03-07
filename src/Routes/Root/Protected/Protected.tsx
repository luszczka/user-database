import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const Protected = (): ReactElement => {
  return <Outlet />;
};

export default Protected;
