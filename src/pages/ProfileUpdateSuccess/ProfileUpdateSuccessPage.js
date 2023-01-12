import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../UserContext';
import { getUserByUsername } from '../../api/usersAPI';
import styles from './ProfileUpdateSuccessPage.module.css';

const ProfileUpdateSuccessPage = () => {
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = async () => {
    const response = await getUserByUsername(user.username);
    console.log(response, 'response in Profile Update Success Page');

    setUsername(response.username);
    setUser({ username: response.username });
    setFirstName(response.firstName);
    setLastName(response.lastName);
    setEmail(response.email);
    setAvatar(response.avatar);
  };

  return (
    <div className={styles.profileUpdateSuccessPageContainer}>
      <h1>ProfileUpdateSuccessPage</h1>
      <p>Updated user information:</p>
      {avatar && <img className={styles.avatarImage} src={avatar} />}
      <div>Username: {username}</div>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Email: {email}</div>
    </div>
  );
};

export default ProfileUpdateSuccessPage;
