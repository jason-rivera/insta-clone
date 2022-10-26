import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsers } from '../api/usersAPI';

const Users = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('first effect');
    getUsers().then((response) => setUsers(response));
  }, []);

  const goTo = (username) => {
    console.log('going to ' + username);
    navigate(`/users/${username}`);
  };

  return (
    <div>
      <h1>Users</h1>
      <h2>Here is a list of users:</h2>
      {users.map((user) => (
        <div key={user._id}>
          <a onClick={() => goTo(user.username)}>{user.username}</a>
        </div>
      ))}
    </div>
  );
};

export default Users;
