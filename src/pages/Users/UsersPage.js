import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/usersAPI';

const UsersPage = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((response) => setUsers(response));
  }, []);

  const goTo = (username) => {
    navigate(`/users/${username}`);
  };

  return (
    <div>
      <h1>Users</h1>
      <h2>Here is a list of users:</h2>
      <div>
        {users?.length ? (
          users?.map((user, index) => (
            <div key={user._id}>
              Index #{index}.{' '}
              <button onClick={() => goTo(user.username)}>
                {user.username}
              </button>
            </div>
          ))
        ) : (
          <p>No users to display</p>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
