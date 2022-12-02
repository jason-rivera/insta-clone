import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { removeUserFromLocalStorage } from '../util';
import styles from './NavBar.module.css';
import { verifyCurrentUser } from '../api/verifyAPI';
import { UserContext } from '../UserContext';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    handleIsLoggedIn();
    setUser(null);
    removeUserFromLocalStorage();
  };

  const handleIsLoggedIn = async () => {
    try {
      const response = await verifyCurrentUser();
      if (response.status === 200) {
        setIsLoggedIn(true);
        console.log(isLoggedIn, '= isloggedin?');
      } else {
        setIsLoggedIn(false);
        console.log(isLoggedIn, '= isloggedin?');
      }
    } catch (e) {
      console.log(e, 'error for checking logged in user');
      setIsLoggedIn(false);
      console.log(isLoggedIn, '= isloggedin?');
    }
  };

  useEffect(() => {
    handleIsLoggedIn();
  }, [isLoggedIn, setIsLoggedIn]);

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
