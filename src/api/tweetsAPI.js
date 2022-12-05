import axios from 'axios';
import { baseUrl } from '../config';

const ENDPOINT_PREFIX = '/tweets';

export const getAllTweets = async () => {
  const response = await axios.get(
    baseUrl + ENDPOINT_PREFIX + '/get-all-tweets',
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );
  // console.log(response.data, 'all tweets');
  return response;
};

export const getAllTweetsByUsername = async (username) => {
  const response = await axios.get(baseUrl + ENDPOINT_PREFIX + `/${username}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response;
};

export const deleteAllTweets = async () => {
  const response = await axios.delete(baseUrl + '/tweets/delete-all', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response;
};
