import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removeUserFromLocalStorage } from '../util';
import styles from './NavBar.module.css';

const NavBar = () => {
  const handleLogout = () => {
    removeUserFromLocalStorage();
  };

  useEffect(() => {}, []);

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
        </div>
        <div className={styles.navSection}>
          <li>
            <Link to='/logout' onClick={() => handleLogout()}>
              Logout
            </Link>
          </li>

          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>

            <li>
              <Link to='/register'>Register</Link>
            </li>
          </>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
