import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { type ReactElement } from 'react';
import { paths } from '../utils/paths';
import Root from './Root/Root';
import RegisterPage from './Root/RegisterPage/RegisterPage';
import LoginPage from './Root/LoginPage/LoginPage';
import Dashboard from './Root/Protected/Dashboard/Dashboard';
import Protected from './Root/Protected/Protected';

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />} path={paths.root}>
          <Route element={<RegisterPage />} path={paths.registerPage} />
          <Route element={<LoginPage />} path={paths.loginPage} index />
          <Route element={<Protected />} path={paths.root}>
            <Route element={<Dashboard />} path={paths.dashboard} index />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
