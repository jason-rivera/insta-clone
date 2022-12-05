import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../config';
import { getUserByUsername } from '../../../api/usersAPI';
import { UserContext } from '../../../UserContext';
import styles from './SingleUserPage.module.css';
import { getAllTweetsByUsername } from '../../../api/tweetsAPI';

const SingleUserPage = () => {
  const [singleUser, setSingleUser] = useState({});
  const { user, setUser } = useContext(UserContext);
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [tweets, setTweets] = useState([]);
  let username = useParams().username;

  useEffect(() => {
    if (username == user.username) {
      setIsCurrentUser(true);
    } else {
      setIsCurrentUser(false);
    }
    console.log(isCurrentUser, ': isCurrentUser');
    getUserByUsername(username).then((response) => setSingleUser(response));
    fetchTweetsByUsername();
  }, [isCurrentUser]);

  const fetchTweetsByUsername = async () => {
    const response = await getAllTweetsByUsername(singleUser.username);
    console.log(response, 'fetch tweets by username');
    setTweets(response.data);
  };

  return (
    <div>
      <h1>{singleUser.username}'s information</h1>
      {singleUser.avatar && (
        <img className={styles.avatar} src={singleUser.avatar} />
      )}
      <p>Username: {singleUser.username}</p>
      <p>First name: {singleUser.firstName}</p>
      <p>Last name: {singleUser.lastName}</p>
      <p>Email: {singleUser.email}</p>
      <p>Tweets:</p>
      {tweets ? (
        tweets.map((tweet) => (
          <div id={tweet._id}>
            <p>
              {tweet.tweet}
              <span className={styles.postedOn}>
                posted on {tweet.createdAt}
              </span>
            </p>
          </div>
        ))
      ) : (
        <p>This user currently does not have any tweets</p>
      )}
    </div>
  );
};

export default SingleUserPage;
