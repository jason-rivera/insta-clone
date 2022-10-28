import React from 'react';
import styles from './Register.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/usersAPI';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
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
    let response = await register(
      firstName,
      lastName,
      username,
      email,
      password
    );

    if (response.status === 200) {
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <h2>This is the register page</h2>
      <form className={styles.registerForm}>
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          type='text'
          onChange={async (event) => {
            await setFirstName(event.target.value);
          }}
        ></input>
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          type='text'
          onChange={async (event) => {
            await setLastName(event.target.value);
          }}
        ></input>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={async (event) => {
            await setUsername(event.target.value);
          }}
        ></input>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
          onChange={async (event) => {
            await setEmail(event.target.value);
          }}
        ></input>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          onChange={async (event) => {
            await setPassword(event.target.value);
          }}
        ></input>
        <br />
        <button type='submit' onClick={(e) => handleSubmit(e)}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
