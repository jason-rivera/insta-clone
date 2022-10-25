import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const getUsers = async () => {
    try {
      await axios.get('http://localhost:8080/get-users').then((response) => {
        console.log(response);
      });
    } catch (e) {
      console.log(e.response);
    }
  };

  const deleteAll = async () => {
    try {
      const response = await axios
        .delete('http://localhost:8080/delete-all-users')
        .then((response) => {
          console.log(response);
        });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <form>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text'></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password'></input>
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button type='button' onClick={getUsers}>
        Test-getUsers
      </button>
      <br />
      <button type='button' onClick={deleteAll}>
        Test-deleteAll
      </button>
    </div>
  );
};

export default Home;
