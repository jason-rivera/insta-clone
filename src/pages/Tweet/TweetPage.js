import axios from 'axios';
import { baseUrl } from '../../config';
import { useState, useEffect } from 'react';

const TweetPage = () => {
  const [tweet, setTweet] = useState('');
  const handleTweetSubmit = (e) => {
    e.preventDefault();
    console.log('handle tweet submit clicked');
    // axios.post(baseUrl + '/tweet', {
    //   tweet: 'hello world 1',
    // });
  };

  useEffect(() => {
    console.log(tweet);
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
