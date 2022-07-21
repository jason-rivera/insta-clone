import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <form>
        <label for='username'>Username</label>
        <input id='username' type='text'></input>
        <label for='password'>Password</label>
        <input id='password' type='password'></input>
      </form>
    </div>
  );
};

export default Home;
