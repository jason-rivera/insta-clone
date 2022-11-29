import axios from 'axios';
import { baseUrl } from '../config';

const ENDPOINT_PREFIX = '/auth';

export const login = async (username, password) => {
  const response = await axios.post(baseUrl + ENDPOINT_PREFIX + '/login', {
    username: username,
    password: password,
  });
  return response;
};
