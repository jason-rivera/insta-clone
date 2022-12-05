import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import styles from './HomePage.module.css';

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
    <div className={styles.homePageContainer}>
      <h1>Welcome to PAL!</h1>
      <h2>Place for ALL!</h2>
      {user && <p>Hello {user.username}</p>}
      <p>This is the home page</p>

      <br />
      <button className={styles.btn} onClick={() => handleViewUsersBtn()}>
        View All Current Users
      </button>
      <br />
      <br />
      <br />
      <br />
      {!user && (
        <div className={styles.bottomBtnsContainer}>
          <div>
            <p>Already a member?</p>
            <button className={styles.btn} onClick={() => handleLoginBtn()}>
              Login
            </button>
          </div>
          <div>
            <p>Not a member?</p>
            <button className={styles.btn} onClick={() => handleSignupBtn()}>
              Register today!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
