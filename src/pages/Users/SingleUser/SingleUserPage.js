import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../config';
import { getUserByUsername } from '../../../api/usersAPI';
// import { UserContext } from '../../../UserContext';

const SingleUserPage = () => {
  const [singleUser, setSingleUser] = useState({});
  // const { user, setUser } = useContext(UserContext);
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  let username = useParams().username;

  useEffect(() => {
    if (username == localStorage.getItem('userToken')) {
      setIsCurrentUser(true);
    } else {
      setIsCurrentUser(false);
    }
    console.log(isCurrentUser, ': isCurrentUser');
    getUserByUsername(username).then((response) => setSingleUser(response));
  }, [isCurrentUser]);

  return (
    <div>
      <h1>{singleUser.username}'s information</h1>
      <p>First name: {singleUser.firstName}</p>
      <p>Last name: {singleUser.lastName}</p>
      <p>Email: {singleUser.email}</p>
    </div>
  );
};

export default SingleUserPage;
