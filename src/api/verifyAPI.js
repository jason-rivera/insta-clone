import axios from 'axios';
import { baseUrl } from '../config';

const ENDPOINT_PREFIX = '/verify';

export const verifyCurrentUser = async () => {
  const response = await axios.get(
    baseUrl + ENDPOINT_PREFIX + '/verify-current-user',
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );
  return response;
};
