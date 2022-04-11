import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAuthorizationToken = () => {
  const auth = {
    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : null
  };
  return auth;
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    // Group: '142'
  }
});

export const remove = (route, id) => {
  return axiosInstance
    .delete(`${route}/${id}`, {
      headers: getAuthorizationToken()
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const get = (route, id) => {
  const fullRoute = id ? `${route}/${id}` : `${route}`;
  return axiosInstance.get(fullRoute, {
    headers: getAuthorizationToken()
  });
};

export const getSearch = (route, word) => {
  const fullRoute = word ? `${route}?search=${word}` : `${route}`;
  return axiosInstance.get(fullRoute, {
    headers: getAuthorizationToken()
  });
};

export const post = (route, payload) => {
  return axiosInstance.post(route, payload, {
    headers: getAuthorizationToken()
  });
};

export const put = (route, body, id) => {
  return axiosInstance
    .put(`${route}/${id}`, body, {
      headers: getAuthorizationToken()
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
