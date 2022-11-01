import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const AboutPage = () => {
  const { user, setUser } = useContext(UserContext);

  const loginTest = () => {
    return {
      id: 4,
      username: 'bob',
      email: 'bob@gmail.com',
    };
  };
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button
        onClick={async () => {
          const user = await loginTest();
          setUser(user);
        }}
      >
        login user test
      </button>
    </div>
  );
};

export default AboutPage;
