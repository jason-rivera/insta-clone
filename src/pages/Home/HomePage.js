import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../UserContext';

const HomePage = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {}, []);

  const handleViewUsersBtn = () => {
    navigate('/users');
  };
  const handleLoginBtn = () => {
    navigate('/login');
  };
  const handleSignupBtn = () => {
    navigate('/register');
  };

  return (
    <>
      <h1>Home Page</h1>
      {user && <p>Hello {user.username}</p>}
      <p>This is the home page</p>

      <br />
      <button onClick={() => handleViewUsersBtn()}>
        View All Current Users
      </button>
      <br />
      <br />
      <br />
      <br />
      {!user && (
        <>
          <button onClick={() => handleLoginBtn()}>Login</button>
          <br />
          <br />
          <button onClick={() => handleSignupBtn()}>
            Not A Member? Sign Up!
          </button>
        </>
      )}
    </>
  );
};

export default HomePage;
