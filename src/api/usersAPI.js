import axios from 'axios';
import { baseUrl } from '../config';

export const getAllUsers = async () => {
  try {
    let response = await axios.get(baseUrl + '/get-all-users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    // console.log(response.data, 'from usersAPI');
    return response.data;
  } catch (e) {
    console.error(e.response);
  }
};

export const getUserByUsername = async (username) => {
  let response = await axios.get(baseUrl + `/users/username/${username}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data[0];
};

export const getUserById = async (id) => {
  let response = await axios.get(baseUrl + `/users/id/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  if (response.status === 200) {
    return response.data[0];
  } else {
    console.log(response);
  }
};

export const register = async (
  firstName,
  lastName,
  username,
  email,
  password
) => {
  try {
    let response = await axios.post(
      baseUrl + '/register',
      {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );
    return response;
  } catch (e) {
    return e;
  }
};
