import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import RegisterPage from './pages/Register/RegisterPage';
import RegisterSuccessPage from './pages/RegisterSuccess/RegisterSuccessPage';
import UsersPage from './pages/Users/UsersPage';
import SingleUserPage from './pages/Users/SingleUser/SingleUserPage';
import LoginPage from './pages/Login/LoginPage';
import LoginSuccessPage from './pages/LoginSuccess/LoginSuccessPage';
import LogoutSuccessPage from './pages/LogoutSuccess/LogoutSuccessPage';
import ProfilePage from './pages/Profile/ProfilePage';
import ProfileEditPage from './pages/ProfileEdit/ProfileEditPage';
import FeedPage from './pages/Feed/FeedPage';
import TweetPage from './pages/Tweet/TweetPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import RequireAuth from './components/RequireAuth';
import './App.css';

import { UserContext } from './UserContext';

function App() {
  return (
    <UserContext.Provider value='sup sup yall'>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/** Public Routes */}
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/register/success' element={<RegisterSuccessPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/login/success' element={<LoginSuccessPage />} />
          <Route path='/logout' element={<LogoutSuccessPage />} />

          {/** PROTECTED - Need to do... NOT WORKING */}
          <Route element={<RequireAuth />}>
            <Route path='/users' element={<UsersPage />} />
            <Route path='/users/:username' element={<SingleUserPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/profile/edit' element={<ProfileEditPage />} />
            <Route path='/feed' element={<FeedPage />} />
            <Route path='/tweet' element={<TweetPage />} />
          </Route>

          {/** Catch All */}
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
