import axios from 'axios';
import { baseUrl } from '../../config';

export const getUsers = async () => {
  try {
    let response = await axios.get(baseUrl + '/get-all-users');
    // console.log(response.data, 'from usersAPI');
    return response.data;
  } catch (e) {
    console.error(e.response);
  }
};

export const getUserByUsername = async (username) => {
  let response = await axios.get(baseUrl + `/users/${username}`);
  return response.data[0];
};
