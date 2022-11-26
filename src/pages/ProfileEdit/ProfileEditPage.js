import React from 'react';
import axios from 'axios';
import { useEffect, useContext, useState, useRef } from 'react';
import { getUserById } from '../../api/usersAPI';
// import { UserContext } from '../../UserContext';
import { baseUrl } from '../../config';

export const ProfileEditPage = () => {
  // const { user, setUser } = useContext(UserContext);

  const [userToEdit, setUserToEdit] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    handleGetUserById();
  }, []);

  const handleGetUserById = async () => {
    // const response = await getUserById(user.id);
    // setUserToEdit(response);
    // setFirstName(response.firstName);
    // setLastName(response.lastName);
    // setUsername(response.username);
    // setEmail(response.email);
  };

  const handleProfileUpdate = async () => {
    document.getElementById('update-success-msg').innerHTML = '';

    const response = await axios.patch(baseUrl + '/profile/update', {
      id: userToEdit._id,
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
    });
    console.log(response, 'from ehre');

    document.getElementById('update-success-msg').innerHTML =
      'Your Profile has been updated';
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <p>This is the edit profile page</p>
      Username:{' '}
      <input
        id='username-input'
        type='text'
        defaultValue={userToEdit.username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      First Name:{' '}
      <input
        id='first-name-input'
        type='text'
        defaultValue={userToEdit.firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      Last Name:{' '}
      <input
        id='last-name-input'
        type='text'
        defaultValue={userToEdit.lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      Email:{' '}
      <input
        id='email-input'
        type='text'
        defaultValue={userToEdit.email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button>Change Password</button>
      <br />
      <br />
      <br />
      <button onClick={() => handleProfileUpdate()}>Update Profile</button>
      <br />
      <br />
      <br />
      <div id='update-success-msg'></div>
    </div>
  );
};
