import React from 'react';
import styles from './PasswordEditPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../config';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const PasswordEditPage = () => {
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    document.getElementById('update-password-error-msg').innerHTML = '';

    try {
      const response = await axios.patch(
        baseUrl + '/profile/password/update',
        {
          username: user.username,
          currentPassword: currentPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      //if success navigate to success page
      if (response.status === 200) {
        navigate('/profile/password/success');
        console.log('success 200');
      }
    } catch (e) {
      console.error(e);
      if (e.response.status === 401) {
        //if there's an error, stay on page and display error message
        document.getElementById('update-password-error-msg').innerHTML =
          e.response.data.message;
      }
    }
  };

  return (
    <div className={styles.passwordEditPageContainer}>
      <h1>Change Password</h1>
      <br />
      <form>
        Current Password:{' '}
        <input
          id='current-password-input'
          type='password'
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <br />
        New Password:{' '}
        <input
          id='new-password-input'
          type='password'
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />
        <button onClick={(e) => handleUpdatePassword(e)}>
          Update Password
        </button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <div id='update-password-error-msg' className={styles.errorMsg}></div>
    </div>
  );
};

export default PasswordEditPage;
