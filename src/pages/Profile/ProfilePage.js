import { useContext, useEffect, useState } from 'react';
import { getUserByUsername } from '../../api/usersAPI';
import axios from 'axios';
import { baseUrl } from '../../config';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {}, []);

  return (
    <div>
      <h1>{user.username}'s Profile Page</h1>
      <p>View Count: XXX</p>
      <p>This is your profile page</p>

      <div>Username: {user.username}</div>
      <div>First Name: {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
      <div>Email: {user.email}</div>

      <br />
      <Link to='/profile/edit'>
        <button>Edit Profile</button>
      </Link>
    </div>
  );
};

export default ProfilePage;
