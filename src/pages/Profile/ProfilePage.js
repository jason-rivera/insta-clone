import { useContext, useEffect } from 'react';
// import { UserContext, setUserContextFromLocalStorage } from '../../UserContext';
import axios from 'axios';
import { baseUrl } from '../../config';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  // const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // setUser(setUserContextFromLocalStorage());
    // Problem: The HTML is being rendered before this setUser() function starts.
    // console.log(user);
  }, []);

  // const handleEditUsername = async () => {};

  // const handleEditFirstName = async () => {
  //   const response = await axios.patch(baseUrl + '/user/update-first-name');
  //   console.log(response);
  // };

  // const handleEditLastName = async () => {};

  // const handleEditEmail = async () => {};

  // const handleEditPassword = async () => {};

  return (
    <div>
      {/* <h1>{user.username}'s Profile Page</h1> */}
      <p>View Count: XXX</p>
      <p>This is your profile page</p>

      {/* <div>Username: {user.username}</div>
      <div>First Name: {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
      <div>Email: {user.email}</div>
      <div>Password: {user.password}</div> */}
      <br />
      <Link to='/profile/edit'>
        <button>Edit Profile</button>
      </Link>
    </div>
  );
};

export default ProfilePage;
