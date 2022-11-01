import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import RegisterPage from './pages/Register/RegisterPage';
import UsersPage from './pages/Users/UsersPage';
import SingleUserPage from './pages/Users/SingleUser/SingleUserPage';
import LoginPage from './pages/Login/LoginPage';
import LoginSuccessPage from './pages/LoginSuccess/LoginSuccessPage';
import LogoutPage from './pages/Logout/LogoutPage';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useState, useMemo } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const memoUser = useMemo(() => ({ user, setUser }), [user, setUser]);

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
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <br />
          {user ? (
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
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
          </Routes>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
