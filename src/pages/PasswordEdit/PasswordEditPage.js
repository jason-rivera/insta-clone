import React from 'react';
import styles from './PasswordEditPage.module.css';
import { useNavigate } from 'react-router-dom';

const PasswordEditPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.passwordEditPageContainer}>
      <h1>Change Password</h1>
      <br />
      Current Password: <input id='current-password-input' type='password' />
      <br />
      New Password: <input id='new-password-input' type='password' />
      <br />
      <button onClick={() => navigate('/profile/password/success')}>
        Update Password
      </button>
      <br />
      <br />
      <br />
      <br />
      <div id='update-password-success-msg'></div>
    </div>
  );
};

export default PasswordEditPage;
