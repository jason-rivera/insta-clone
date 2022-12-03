import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../config';
import { UserContext } from '../../UserContext';

const LoginSuccessPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    getUsername();
  }, []);

  const getUsername = async () => {
    const response = await axios.post(
      baseUrl + '/users/get-own-data',
      {
        username: user.username,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        // withCredentials: true,
        // credentials: 'include',
      }
    );

    console.log(response, 'login successe page');
    console.log(response.data[0].avatar);
    setAvatar(response.data[0].avatar);

    // setUser(response.data[0].username);
    // console.log(response.data[0].username, 'data from server');
    // console.log(user, 'context');
  };

  return (
    <div>
      <h1>Login Success Page</h1>
      <h2>Hello {user.username}, You have successfully logged in!</h2>
      {avatar && <img src={avatar} />}
      <br />
    </div>
  );
};

export default LoginSuccessPage;
