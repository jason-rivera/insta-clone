import axios from 'axios';
import { baseUrl } from '../../config';
import { useEffect, useState } from 'react';
import styles from './FeedPage.module.css';

const FeedPage = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getAllTweets();
  }, []);

  const deleteAllTweets = async () => {
    console.log('got here');
    const response = await axios.delete(baseUrl + '/tweet/delete-all');
    console.log(response, 'response');
    if (response.status === 200) {
      getAllTweets();
    } else {
      document.getElementById('delete-error-msg').innerHTML =
        'something went wrong';
    }
  };

  const getAllTweets = async () => {
    const response = await axios.get(baseUrl + '/tweets');
    setTweets(response.data.reverse());
    console.log(response, 'all tweets');
  };

  return (
    <div>
      <h1>Feed</h1>
      <p>This is the feed page</p>
      <br />
      <br />
      <br />
      {tweets.map((tweet) => (
        <div key={tweet._id} className={styles.tweet}>
          {tweet.tweet}
          <br />
          <div className={styles.postedBy}>
            posted by {tweet.username} [{tweet.createdAt}]
          </div>
        </div>
      ))}

      <button
        onClick={() => {
          deleteAllTweets();
        }}
      >
        Delete All Tweets
      </button>
      <br />
      <div id='delete-error-msg'></div>
    </div>
  );
};

export default FeedPage;
