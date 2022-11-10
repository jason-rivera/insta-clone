import { useContext, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import { logoutUser } from '../../util';

const LogoutPage = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
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
