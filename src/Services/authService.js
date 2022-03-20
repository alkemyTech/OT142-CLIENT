import { get, post } from './privateApiService';

export const login = (email, password) => {
  const payload = {
    email: email,
    password: password
  };
  return post(process.env.REACT_APP_LOGIN, payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const register = (name, email, password) => {
  const payload = {
    name: name,
    email: email,
    password: password
  };
  return post(process.env.REACT_APP_REGISTER, payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getAuth = () => {
  return get(process.env.REACT_APP_AUTH_ME)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
