import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedIn } from './Store/AuthSlice';
import { useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import UserProfile from './components/Profile/UserProfile';
import ChatPage from './components/ChatPage/ChatPage';
import AboutPage from './components/AboutPage/AboutPage';
import AdminDashBoard from './components/AdminDashboard/AdminDashBoard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Logout from './components/Logout/Logout';
import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage';
import Settings from './components/Settings/Settings';
import Notification from './components/Notification/Notification';
import FooterPage from './components/FooterPage/FooterPage';
import './App.css';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(userLoggedIn());
  }, []);

  // console.log(isLoggedIn);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='login'
          element={isLoggedIn ? <Navigate to='/' /> : <Login />}
        />
        <Route
          path='signup'
          element={isLoggedIn ? <Navigate to='/' /> : <RegisterPage />}
        />
        <Route
          path='forgotPassword'
          element={isLoggedIn ? <Navigate to='/' /> : <ForgotPasswordPage />}
        />
        <Route path='about' element={<AboutPage />} />

        <Route element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
          <Route path='admin' element={<AdminDashBoard />} />
          <Route path='profile' exact element={<Profile />} />
          <Route path='profile/:username' element={<UserProfile />} />
          <Route path='chatPage' element={<ChatPage />} />
          <Route path='logout' element={<Logout />} />
          <Route path='settings' element={<Settings />} />
          <Route path='notification' element={<Notification />} />
        </Route>
      </Routes>
      {pathname !== '/' && <FooterPage />}
    </>
  );
}

export default App;
