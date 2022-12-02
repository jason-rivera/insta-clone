import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const HomePage = () => {
  const navigate = useNavigate();
  // const { user, setUser } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);

  // useEffect(() => {}, []);

  const handleViewUsersBtn = () => {
    navigate('/users');
  };
  // const handleLoginBtn = () => {
  //   navigate('/login');
  // };
  // const handleSignupBtn = () => {
  //   navigate('/register');
  // };

  const setCookie = async () => {
    // console.log('set cookie test');
    // const response = await axios.get(baseUrl + '/setCookie');
    // console.log(response);

    document.cookie = 'TEST=1; expires=Tue, 14 Oct 2014 20:23:32 GMT; path=/';
    console.log(document.cookie);
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <p>context {user.username}</p>
      <br />
      <button onClick={() => handleViewUsersBtn()}>
        View All Current Users
      </button>
      <br />
      <br />
      <br />
      <br />
      {/* {!user && (
        <>
          <button onClick={() => handleLoginBtn()}>Login</button>
          <br />
          <br />
          <button onClick={() => handleSignupBtn()}>
            Not A Member? Sign Up!
          </button>
        </>
      )} */}

      <br />
      <br />
      <button
        onClick={() => {
          setCookie();
        }}
      >
        set cookie
      </button>
    </>
  );
};

export default HomePage;
