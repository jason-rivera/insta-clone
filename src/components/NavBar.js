import { useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';
import { logoutUser } from '../util';
import styles from './NavBar.module.css';

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
  };

  useEffect(() => {
    console.log(user, 'app.js');
  });

  return (
    <nav>
      <ul className={styles.navContainer}>
        <div className={styles.navSection}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <Link to='/feed'>Feed</Link>
              </li>
              <li>
                <Link to='/tweet'>Tweet</Link>
              </li>
            </>
          )}
        </div>
        <div className={styles.navSection}>
          {user ? (
            <li>
              <Link to='/logout' onClick={() => handleLogout()}>
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>

              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
