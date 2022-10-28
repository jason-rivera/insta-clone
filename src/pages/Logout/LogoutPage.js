import { useEffect } from 'react';

const removeLocalStorageTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userToken');
};

const LogoutPage = () => {
  useEffect(() => {
    removeLocalStorageTokens();
  }, []);
  return (
    <div>
      <h1>Logout Page</h1>
      <p>You have successfully logged out</p>
    </div>
  );
};

export default LogoutPage;
