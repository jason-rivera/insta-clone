import { useContext, useEffect } from 'react';
import { UserContext } from '../../UserContext';

const removeLocalStorageTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userToken');
};

const LogoutPage = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    removeLocalStorageTokens();
    setUser(null);
  }, []);

  return (
    <div>
      <h1>Logout Page</h1>
      <p>You have successfully logged out</p>
    </div>
  );
};

export default LogoutPage;
