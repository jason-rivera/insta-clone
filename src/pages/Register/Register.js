import React from 'react';
import styles from './Register.module.css';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <h2>This is the register page</h2>
      <form className={styles.registerForm}>
        <label for='firstName'>First Name</label>
        <input id='firstName' type='text'></input>
        <label for='lastName'>Last Name</label>
        <input id='lastName' type='text'></input>
        <label for='userName'>Username</label>
        <input id='userName' type='text'></input>
        <label for='email'>Email</label>
        <input id='email' type='email'></input>
        <label for='password'>Password</label>
        <input id='password' type='password'></input>
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
