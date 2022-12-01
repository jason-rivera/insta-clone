import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div>
      <NavBar />
      Logged (or not) in as: XXXXXXX
      <Outlet />
    </div>
  );
};

export default Layout;
