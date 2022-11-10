import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import RegisterPage from './pages/Register/RegisterPage';
import UsersPage from './pages/Users/UsersPage';
import SingleUserPage from './pages/Users/SingleUser/SingleUserPage';
import LoginPage from './pages/Login/LoginPage';
import LoginSuccessPage from './pages/LoginSuccess/LoginSuccessPage';
import LogoutPage from './pages/Logout/LogoutPage';
import ProfilePage from './pages/Profile/ProfilePage';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useState, useMemo, useEffect } from 'react';
import { logoutUser } from './util';

function App() {
  const [user, setUser] = useState(null);
  const memoUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    console.log(user, 'app.js');
  });

  const handleLogout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <>
      <nav className='nav-container'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to='/users'>Users</Link>
              </li>

              <li>
                <Link to='/profile'>Profile</Link>
              </li>
            </>
          )}
          <br />
          {user ? (
            <li>
              <Link to='/logout' onClick={() => handleLogout()}>
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>

              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className='content-container'>
        <UserContext.Provider value={memoUser}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/users/:username' element={<SingleUserPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/login/success' element={<LoginSuccessPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
