import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/usersAPI';

const UsersPage = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('first effect');
    getAllUsers().then((response) => setUsers(response));
  }, []);

  const goTo = (username) => {
    console.log('going to ' + username);
    navigate(`/users/${username}`);
  };

  return (
    <div>
      <h1>Users</h1>
      <h2>Here is a list of users:</h2>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <button onClick={() => goTo(user.username)}>{user.username}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
