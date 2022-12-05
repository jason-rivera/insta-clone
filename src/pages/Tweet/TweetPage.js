import axios from 'axios';
import { baseUrl } from '../../config';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../UserContext';
import styles from './TweetPage.module.css';

const TweetPage = () => {
  const [tweet, setTweet] = useState('');
  const { user, setUser } = useContext(UserContext);

  const handleTweetSubmit = async (e) => {
    e.preventDefault();
    console.log('handle tweet submit clicked');

    console.log(tweet);
    let response = await axios.post(
      baseUrl + '/tweets/tweet',
      {
        tweet: tweet,
        username: user.username,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );

    console.log(response.status);
    console.log(response.data.tweet);
    console.log(response.data.username);

    if (response.status === 200) {
      document.getElementById('tweetText').value = '';
      document.getElementById(
        'tweetSuccess'
      ).textContent = `You have successfully tweeted: ${tweet}`;
    }
  };

  useEffect(() => {
    // setUser(setUserContextFromLocalStorage());
  }, [tweet]);

  return (
    <div className={styles.tweetPageContainer}>
      <h1>Tweet</h1>
      <p>Go ahead and tweet!</p>

      <form>
        <input
          id='tweetText'
          type='text'
          onChange={(event) => {
            setTweet(event.target.value);
          }}
        ></input>
        <button onClick={(e) => handleTweetSubmit(e)}>Tweet</button>
      </form>
      <div id='tweetSuccess'></div>
    </div>
  );
};

export default TweetPage;
