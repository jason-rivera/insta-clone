import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../UserContext';

const LoginSuccessPage = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log(user, 'loginSuccessPage.js');
  });
  return (
    <div>
      <h1>Login Success Page</h1>
      <h2>Hello {user.username}, You have successfully logged in!</h2>
    </div>
  );
};

export default LoginSuccessPage;
