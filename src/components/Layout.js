import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const Layout = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <NavBar />
      {user && `Logged in as: ${user.username}`}
      <Outlet />
    </div>
  );
};

export default Layout;
