import { useContext, useEffect } from 'react';
import { removeUserFromLocalStorage } from '../../util';

const LogoutSuccessPage = () => {
  useEffect(() => {
    removeUserFromLocalStorage();
  }, []);

  return (
    <div>
      <h1>Logout Page</h1>
      <p>You have successfully logged out</p>
    </div>
  );
};

export default LogoutSuccessPage;
