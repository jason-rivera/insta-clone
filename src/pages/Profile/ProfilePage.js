import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>{user.username}'s Profile Page</h1>
      <p>This is your profile page</p>
      <p>Username: {user.username}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <br />
    </div>
  );
};

export default ProfilePage;
