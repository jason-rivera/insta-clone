import { useContext, useEffect } from 'react';
import { removeUserFromLocalStorage } from '../../util';
import { UserContext } from '../../UserContext';
import styles from './LogoutSuccessPage.module.css';

const LogoutSuccessPage = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    removeUserFromLocalStorage();
    setUser(null);
  }, []);

  return (
    <div className={styles.logoutSuccessPageContainer}>
      <h1>Logout Page</h1>
      <p>You have successfully logged out</p>
    </div>
  );
};

export default LogoutSuccessPage;
