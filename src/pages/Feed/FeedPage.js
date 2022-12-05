import axios from 'axios';
import { baseUrl } from '../../config';
import { useEffect, useState } from 'react';
import styles from './FeedPage.module.css';
import { getAllTweets, deleteAllTweets } from '../../api/tweetsAPI';

const FeedPage = () => {
  const [tweets, setTweets] = useState([]);

  const handleGetAllTweets = async () => {
    const response = await getAllTweets();
    setTweets(response.data);
  };

  const handleDeleteAllTweets = async () => {
    const response = await deleteAllTweets();
    if (response.status === 200) {
      handleGetAllTweets();
      document.getElementById('delete-error-msg').innerHTML =
        'Deleted all tweets';
    } else {
      document.getElementById('delete-error-msg').innerHTML =
        'something went wrong';
    }
  };

  useEffect(() => {
    handleGetAllTweets();
  }, []);

  return (
    <div className={styles.feedPageContainer}>
      <h1>Feed</h1>
      <br />
      {tweets.length ? (
        tweets.reverse().map((tweet) => (
          <div key={tweet._id} className={styles.tweet}>
            {tweet.tweet}
            <br />
            <div className={styles.postedBy}>
              posted by {tweet.username} [{tweet.createdAt}]
            </div>
          </div>
        ))
      ) : (
        <p>No tweets found in the database</p>
      )}

      <br />
      <br />
      <br />
      <br />

      <button
        onClick={() => {
          handleDeleteAllTweets();
        }}
      >
        Delete All Tweets
      </button>
      <br />
      <br />
      <div id='delete-error-msg'></div>
    </div>
  );
};

export default FeedPage;
