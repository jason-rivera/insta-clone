import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../config';
import { getUserByUsername } from '../../api/usersAPI';

const SingleUser = () => {
  const [singleUser, setSingleUser] = useState({});
  let username = useParams().username;

  useEffect(() => {
    console.log(username);
    getUserByUsername(username).then((response) => setSingleUser(response));
  }, []);

  return (
    <div>
      <h1>{singleUser.username}'s information</h1>
      <p>First name: {singleUser.firstName}</p>
      <p>Last name: {singleUser.lastName}</p>
      <p>Email: {singleUser.email}</p>
    </div>
  );
};

export default SingleUser;
