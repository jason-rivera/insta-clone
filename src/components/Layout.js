import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import styles from './Layout.module.css';

const Layout = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <NavBar />
      {user && `Logged in as: ${user.username}`}
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
