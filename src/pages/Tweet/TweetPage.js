import axios from 'axios';
import { baseUrl } from '../../config';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../UserContext';

const TweetPage = () => {
  const [tweet, setTweet] = useState('');
  const { user, setUser } = useContext(UserContext);

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    console.log('handle tweet submit clicked');

    console.log(tweet);
    axios.post(baseUrl + '/tweet', {
      tweet: 'hello world 1',
      username: user.username,
    });
  };

  useEffect(() => {
    console.log(tweet);
    console.log(user.username);
  }, [tweet]);

  return (
    <div>
      <h1>Tweet</h1>
      <p>Go ahead and tweet!</p>

      <form>
        <input
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
