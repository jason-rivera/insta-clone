import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/usersAPI';
import { deleteAllUsers } from '../../api/usersAPI';
import styles from './UsersPage.module.css';

const UsersPage = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const handleDeleteAllUsers = () => {
    const response = deleteAllUsers();
    console.log(response);
    if (response.status === 200) {
      document.getElementById('error-msg').innerHTML =
        'Successfully deleted all users';
      setUsers([]);
    } else {
      document.getElementById('error-msg').innerHTML = 'Something went wrong';
    }
  };

  useEffect(() => {
    getAllUsers().then((response) => setUsers(response));
  }, []);

  const goTo = (username) => {
    navigate(`/users/${username}`);
  };

  return (
    <div className={styles.usersPageContainer}>
      <h1>Users</h1>
      <h2>Here is a list of users:</h2>
      <div className={styles.usersContainer}>
        {users?.length ? (
          users?.map((user, index) => (
            <div className={styles.singleUserContainer} key={user._id}>
              <div className={styles.avatarContainer}>
                {user.avatar && (
                  <img className={styles.avatarImage} src={user.avatar} />
                )}
              </div>
              <p>
                #{index} {user.username}
              </p>
              <p>
                {user.firstName} {user.lastName}
              </p>
              <button onClick={() => goTo(user.username)}>View Profile</button>
            </div>
          ))
        ) : (
          <p>No users to display</p>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => handleDeleteAllUsers()}>Delete all users</button>
      <div id='error-msg'></div>
    </div>
  );
};

export default UsersPage;
