import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import RegisterPage from './pages/Register/RegisterPage';
import UsersPage from './pages/Users/UsersPage';
import SingleUserPage from './pages/Users/SingleUser/SingleUserPage';
import LoginPage from './pages/Login/LoginPage';
import LogoutPage from './pages/Logout/LogoutPage';
import { Link } from 'react-router-dom';

function App() {
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
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
        </ul>
      </nav>
      <div className='content-container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:username' element={<SingleUserPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/logout' element={<LogoutPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
