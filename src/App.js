import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import RegisterPage from './pages/Register/RegisterPage';
import RegisterSuccessPage from './pages/RegisterSuccess/RegisterSuccessPage';
import UsersPage from './pages/Users/UsersPage';
import SingleUserPage from './pages/Users/SingleUser/SingleUserPage';
import LoginPage from './pages/Login/LoginPage';
import LoginSuccessPage from './pages/LoginSuccess/LoginSuccessPage';
import LogoutPage from './pages/Logout/LogoutPage';
import ProfilePage from './pages/Profile/ProfilePage';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useState, useMemo, useEffect } from 'react';
import { logoutUser } from './util';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const memoUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    console.log(user, 'app.js');
  });

  return (
    <>
      <UserContext.Provider value={memoUser}>
        <NavBar />
        {user && `Logged in as: ${user.username}`}
        <div className='content-container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/register/success' element={<RegisterSuccessPage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/users/:username' element={<SingleUserPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/login/success' element={<LoginSuccessPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
