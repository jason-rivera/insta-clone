import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/usersAPI';
import styles from './Register.module.css';
import global from '../../styles/global.module.css';

const RegisterPage = () => {
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(username);
  //   console.log(email);
  //   console.log(password);
  // }, [firstName, lastName, username, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById('error-msg').innerHTML = '';

    console.log(avatar);

    let response = await register(
      firstName,
      lastName,
      username,
      email,
      password,
      avatar
    );

    if (response.status === 200) {
      navigate('/register/success');
    } else if (response.response.status === 413) {
      document.getElementById('error-msg').innerHTML =
        'Your Avatar is too large. Please choose something smaller in size.';
    } else if (response.response.status === 409) {
      document.getElementById('error-msg').innerHTML =
        'One of the fields already exists in our database';
    } else {
      console.log(response);
      document.getElementById('error-msg').innerHTML = 'Something went wrong';
    }
  };

  const handleFileUpload = async (event) => {
    console.log(event.target.files);
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setAvatar(base64);
    console.log(base64);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className={styles.registerPageContainer}>
      <h1>Register</h1>
      <form className={styles.registerForm}>
        <img src={avatar} />
        <label htmlFor='avatar'>Avatar (150x150)</label>
        <input
          id='avatar'
          className={styles.inputField}
          type='file'
          onChange={async (event) => {
            handleFileUpload(event);
          }}
          aria-labelledby='avatar'
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log('removing');
            setAvatar('');
          }}
        >
          Remove Profile Picture
        </button>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          className={styles.inputField}
          type='text'
          onChange={async (event) => {
            await setUsername(event.target.value);
          }}
          aria-labelledby='username'
        />
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          className={styles.inputField}
          type='text'
          onChange={async (event) => {
            await setFirstName(event.target.value);
          }}
          autoFocus
          aria-labelledby='first name'
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          className={styles.inputField}
          type='text'
          onChange={async (event) => {
            await setLastName(event.target.value);
          }}
          aria-labelledby='last name'
        />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          className={styles.inputField}
          type='text'
          onChange={async (event) => {
            await setEmail(event.target.value);
          }}
          aria-labelledby='email'
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          className={styles.inputField}
          type='password'
          onChange={async (event) => {
            await setPassword(event.target.value);
          }}
          aria-labelledby='password'
        />

        <br />
        <button className={global.btn} onClick={(e) => handleSubmit(e)}>
          Register
        </button>
        <div id='error-msg' className={styles.errorMsg}></div>
      </form>
    </div>
  );
};

export default RegisterPage;
