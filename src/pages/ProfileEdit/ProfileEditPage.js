import React from 'react';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { getUserById } from '../../api/usersAPI';
import { UserContext } from '../../UserContext';
import { baseUrl } from '../../config';

export const ProfileEditPage = () => {
  const { user, setUser } = useContext(UserContext);

  const [userToEdit, setUserToEdit] = useState({});

  useEffect(() => {
    handleGetUserById();
  }, []);

  const handleGetUserById = async () => {
    const response = await getUserById(user.id);
    setUserToEdit(response);
  };

  const handleProfileUpdate = async () => {
    console.log('handle the profile update button');
    const response = await axios.patch(baseUrl + '/profile/update', {
      id: userToEdit._id,
    });
    console.log(response);
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <p>This is the edit profile page</p>
      First Name: <input type='text' value={userToEdit.firstName} />
      <br />
      Last Name: <input type='text' value={userToEdit.lastName} />
      <br />
      Username: <input type='text' value={userToEdit.username} />
      <br />
      Email: <input type='text' value={userToEdit.email} />
      <br />
      <button>Change Password</button>
      <br />
      <br />
      <br />
      <button onClick={() => handleProfileUpdate()}>Update Profile</button>
    </div>
  );
};
