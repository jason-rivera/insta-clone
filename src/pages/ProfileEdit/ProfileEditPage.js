import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { getUserByUsername } from '../../api/usersAPI';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../config';
import styles from './ProfileEditPage.module.css';
import { convertToBase64 } from '../../util';

const ProfileEditPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const navigate = useNavigate();

  const getUserInformation = async () => {
    const response = await getUserByUsername(user.username);

    setUsername(response.username);
    setUser({ username: response.username });
    setFirstName(response.firstName);
    setLastName(response.lastName);
    setEmail(response.email);
    setAvatar(response.avatar);
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  const handleProfileUpdate = async () => {
    console.log('handling profile update button');
    document.getElementById('update-success-msg').innerHTML = '';

    const response = await axios.patch(
      baseUrl + '/profile/update',
      {
        usernameOld: user.username,
        usernameNew: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        avatar: avatar,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );
    console.log(response, 'update profile response');

    //if success navigate to success page + update context
    if (response?.status === 200) {
      setUser({ username: username });
      navigate('/profile/edit/success');
    } else {
      //if there's an error, stay on page and display error message
      document.getElementById('update-success-msg').innerHTML =
        'There was an error';
    }
  };

  const handleFileUpload = async (event) => {
    console.log(event.target.files);
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setAvatar(base64);
    console.log(base64);
  };

  return (
    <div className={styles.profileEditPageContainer}>
      <h1>Edit Profile</h1>
      <label htmlFor='avatar'>Avatar (150x150)</label>
      {avatar ? (
        <>
          <img className={styles.avatarImage} src={avatar} />{' '}
          <button
            onClick={(e) => {
              e.preventDefault();
              setAvatar('');
            }}
          >
            Remove Profile Picture
          </button>
        </>
      ) : (
        <input
          id='avatar'
          className={styles.inputField}
          type='file'
          onChange={async (event) => {
            handleFileUpload(event);
          }}
          aria-labelledby='avatar'
        />
      )}
      <br />
      Username:{' '}
      <input
        id='username-input'
        type='text'
        defaultValue={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      First Name:{' '}
      <input
        id='first-name-input'
        type='text'
        defaultValue={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      Last Name:{' '}
      <input
        id='last-name-input'
        type='text'
        defaultValue={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      Email:{' '}
      <input
        id='email-input'
        type='text'
        defaultValue={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={() => navigate('/profile/password/edit')}>
        Change Password
      </button>
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

export default ProfileEditPage;
