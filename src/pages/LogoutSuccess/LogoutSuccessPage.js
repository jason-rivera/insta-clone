import { useContext, useEffect } from 'react';
import { removeUserFromLocalStorage } from '../../util';
import { UserContext } from '../../UserContext';

const LogoutSuccessPage = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    removeUserFromLocalStorage();
    setUser(null);
  }, []);

  return (
    <div>
      <h1>Logout Page</h1>
      <p>You have successfully logged out</p>
    </div>
  );
};

export default LogoutSuccessPage;
