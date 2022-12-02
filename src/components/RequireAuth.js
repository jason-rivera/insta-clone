import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const RequireAuth = () => {
  const { user } = useContext(UserContext);

  console.log('checking in RequireAuth');

  return user ? <Outlet /> : <Navigate to='/login' />;
};

export default RequireAuth;
