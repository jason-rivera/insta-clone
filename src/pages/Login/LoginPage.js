import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/authAPI';
import { UserContext } from '../../UserContext';
import styles from './LoginPage.module.css';
import global from '../../styles/global.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    document.getElementById('error-message').innerHTML = '';

    try {
      const response = await login(username, password);

      if (response.status === 200) {
        console.log(response.data, 'response check here now');
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('userToken', response.data.userToken);

        setUser({
          username: response.data.userToken,
        });
        navigate('/login/success');
      }
    } catch (e) {
      if (e.response.status === 401) {
        document.getElementById('error-message').innerHTML =
          'Incorrect username or password!';
      } else {
        console.error(e.response.data);
      }
    }
  };

  return (
    <div className={styles.loginPageContainer}>
      <h1>Login Page</h1>
      <form className={styles.loginForm}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <br />
        <button className={global.btn} onClick={(e) => handleLogin(e)}>
          Login
        </button>
      </form>
      <br />
      <br />
      <div id='error-message'></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default LoginPage;
