import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../UserContext';
import { getUserByUsername } from '../../api/usersAPI';

const ProfileUpdateSuccessPage = () => {
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

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
  };

  return (
    <div>
      <h1>ProfileUpdateSuccessPage</h1>
      <p>Updated user information:</p>
      <div>Username: {username}</div>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Email: {email}</div>
    </div>
  );
};

export default ProfileUpdateSuccessPage;
