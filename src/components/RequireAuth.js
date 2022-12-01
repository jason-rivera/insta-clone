import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyCurrentUser } from '../api/verifyAPI';

const RequireAuth = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleIsLoggedIn = async () => {
    const response = await verifyCurrentUser();
    if (response.status === 200) {
      console.log('logged in');
      setIsLoggedIn(true);
    } else {
      console.log('NOT logged in');
      setIsLoggedIn(false);
    }
  };

  const user = {
    name: 'yo',
  };

  useEffect(() => {
    // handleIsLoggedIn();
    console.log('RequireAuth Component activated');
  }, []);

  return localStorage.getItem('userToken') ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
