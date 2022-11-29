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
  const [weaknesses, setWeaknesses] = useState([]);

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
      navigate('/register/success');
    }
  };

  const strengthMeter = document.getElementById('strengthMeter');
  const passwordInput = document.getElementById('passwordInput');

  const handleStrengthMeter = async (password) => {
    // const reasonsContainer = document.getElementById('reasons');
    // reasonsContainer.innerHTML = '';
    // await setWeaknesses(calculatePasswordStrength(password));
    // let strength = 100;
    // weaknesses.forEach((weakness) => {
    //   console.log(weakness.deduction);
    //   strength -= weakness.deduction;
    //   const messageElement = document.createElement('div');
    //   messageElement.innerText = weakness.message;
    //   reasonsContainer.appendChild(messageElement);
    // });
    // strengthMeter.style.setProperty('--strength', strength);
  };

  const calculatePasswordStrength = (password) => {
    const weaknesses = [];
    weaknesses.push(lengthWeakness(password));
    weaknesses.push(lowercaseWeakness(password));
    weaknesses.push(uppercaseWeakness(password));
    weaknesses.push(numberWeakness(password));
    weaknesses.push(specialCharacterWeakness(password));

    return weaknesses;
  };

  const lengthWeakness = (password) => {
    const length = password.length;

    if (length <= 2) {
      return {
        message: 'Your password is too short',
        deduction: 40,
      };
    }

    if (length <= 6) {
      return {
        message: 'Your password could be longer',
        deduction: 15,
      };
    }
  };

  const lowercaseWeakness = (password) => {
    return characterTypeWeaknessHelper(
      password,
      /[a-z]/g,
      'lowercase characters'
    );
  };

  const uppercaseWeakness = (password) => {
    return characterTypeWeaknessHelper(
      password,
      /[A-Z]/g,
      'uppercase characters'
    );
  };

  const numberWeakness = (password) => {
    return characterTypeWeaknessHelper(password, /[0-9]/g, 'number characters');
  };

  const specialCharacterWeakness = (password) => {
    return characterTypeWeaknessHelper(
      password,
      /[^0-9a-zA-Z\s]/g,
      'special characters'
    );
  };

  const characterTypeWeaknessHelper = (password, regex, type) => {
    const matches = password.match(regex) || [];

    if (matches.length === 0) {
      return {
        message: `Your password has no ${type}`,
        deduction: 20,
      };
    }

    if (matches.length <= 2) {
      return {
        message: `Your password could use more ${type}`,
        deduction: 5,
      };
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <h2>This is the register page</h2>
      <form className={styles.registerForm}>
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
            await handleStrengthMeter(event.target.value);
          }}
          aria-labelledby='password'
        />
        <div id='strengthMeter' className={styles.strengthMeter}></div>
        <div id='reasons' className={styles.reasons}>
          asdf
        </div>
        <br />
        <button onClick={(e) => handleSubmit(e)}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
