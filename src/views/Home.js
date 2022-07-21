const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <form>
        <label for='username'>Username</label>
        <input name='username' type='text'></input>
        <label for='password'>Password</label>
        <input name='password' type='password'></input>
      </form>

      <h3>Create new account</h3>
    </div>
  );
};

export default Home;
