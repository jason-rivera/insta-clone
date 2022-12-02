import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../config';
import { UserContext } from '../../UserContext';

const LoginSuccessPage = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getUsername();
  }, []);

  const getUsername = async () => {
    console.log(localStorage.getItem('accessToken'), 'login success page');
    const response = await axios.post(
      baseUrl + '/users/get-own-data',
      {
        accessToken: localStorage.getItem('accessToken'),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        // withCredentials: true,
        // credentials: 'include',
      }
    );

    setUser(response.data[0]);
    console.log(response);
  };

  const getAllUsers = async () => {
    const response = await axios.get(baseUrl + '/users/get-all-users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });

    console.log(response);
  };

  return (
    <div>
      <h1>Login Success Page</h1>
      <h2>Hello {user.username}, You have successfully logged in!</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => getAllUsers()}>Get All Users</button>
    </div>
  );
};

export default LoginSuccessPage;
