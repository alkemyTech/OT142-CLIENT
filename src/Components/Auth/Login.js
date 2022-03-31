import React from 'react';
import LoginForm from './LoginForm.js';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const isAuth = sessionStorage.getItem('login-token');

  return isAuth ? <Redirect to='/' /> : <LoginForm />;
};

export default Login;
