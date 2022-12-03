import { useContext, useEffect, useState } from 'react';
import { getUserByUsername } from '../../api/usersAPI';
import axios from 'axios';
import { baseUrl } from '../../config';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  console.log(user);

  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = async () => {
    const response = await getUserByUsername(user.username);
    setUsername(response.username);
    setFirstName(response.firstName);
    setLastName(response.lastName);
    setEmail(response.email);
  };

  return (
    <div>
      <h1>{user.username}'s Profile Page</h1>
      <p>View Count: XXX</p>
      <p>This is your profile page</p>

      <div>Username: {username}</div>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Email: {email}</div>

      <br />
      <Link to='/profile/edit'>
        <button>Edit Profile</button>
      </Link>
    </div>
  );
};

export default ProfilePage;
