import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useEffect } from 'react';

import { verifyCurrentUser } from '../api/verifyAPI';

const RequireAuth = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    handleVerification();
  }, []);

  const handleVerification = async () => {
    try {
      const response = await verifyCurrentUser();
      console.log(response, 'response from handleVerification');
    } catch (e) {
      console.log(e, 'from handleVerification');
      setUser(null);
    }
  };

  console.log('checking in RequireAuth');

  return user ? <Outlet /> : <Navigate to='/login' />;
};

export default RequireAuth;
