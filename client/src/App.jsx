import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedIn } from './store/auth-slice';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import ChatPage from './components/ChatPage/ChatPage';
import AboutPage from './components/AboutPage/AboutPage';
import AdminDashBoard from './components/AdminDashboard/AdminDashBoard';
import PrivateRoute from './components/HomePage/PrivateRoute';
import Login from './components/LoginPage/Login';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Logout from './components/LoginPage/Logout';

import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage';
import Settings from './components/Settings/Settings';
import Notification from './components/Notification/Notification';
import FooterPage from './components/FooterPage/FooterPage';
import './App.css';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoggedIn());
  }, []);

  console.log(isLoggedIn);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<RegisterPage />} />

        <Route element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='admin' element={<AdminDashBoard />} />
          <Route path='profile' element={<Profile />} />
          <Route path='chatPage' element={<ChatPage />} />
          <Route path='logout' element={<Logout />} />
          <Route path='forgotPassword' element={<ForgotPasswordPage />} />
          <Route path='settings' element={<Settings />} />
          <Route path='notification' element={<Notification />} />
        </Route>
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
