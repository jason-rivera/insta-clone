import axios from 'axios';
import { baseUrl } from '../../config';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      await axios.get(baseUrl + '/api/v1/get-all-users').then((response) => {
        console.log(response.data);
        setUsers(response.data);
      });
    } catch (e) {
      console.log(e.response);
    }
  };

  const getOwnData = async (e) => {
    e.preventDefault();
    const verification = await axios.post(baseUrl + '/auth/verify-jwt', {
      accessToken: localStorage.getItem('accessToken'),
    });

    console.log(verification, 'starting getOwnData');

    if (verification.status === 200) {
      try {
        await axios.get(baseUrl + '/get-own-data').then((response) => {
          console.log(response);
        });
      } catch (e) {
        console.log(e.response);
      }
    } else {
      console.log(
        'could not verify JWT [also, fix this part, say correct message]'
      );
    }
  };

  const deleteAll = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .delete(baseUrl + '/api/v1/delete-all-users')
        .then((response) => {
          console.log(response);
        });
    } catch (e) {
      console.error(e);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    document.getElementById('error-message').innerHTML = '';

    try {
      const response = await axios.post(baseUrl + '/auth/login', {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        console.log(response.data, 'response check here now');
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('userToken', response.data.userToken);
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
    <div>
      <h1>Login Page</h1>
      <form>
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
        <button onClick={(e) => login(e)}>Login</button>
      </form>
      <br />
      <br />
      <div id='error-message'></div>
      <br />
      Users:
      <br />
      {users?.length ? (
        users.map((user) => <p key={user._id}>{user.username}</p>)
      ) : (
        <p>No Users to display. Try clicking the Get-All-Users button</p>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <button onClick={(e) => getOwnData(e)}>Test-get-own-data</button> */}
      <br />
      <br />
      <br />
      <br />
      {/* <button onClick={(e) => deleteAll(e)}>Test-deleteAll</button> */}
    </div>
  );
};

export default LoginPage;
