import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const AboutPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </div>
  );
};

export default AboutPage;
