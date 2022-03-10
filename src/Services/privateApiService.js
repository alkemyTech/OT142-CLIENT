import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAuthorizationToken = () => {
  const auth = {
    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : null
  }
  return auth;
}


export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Group: "142",
  },
});

export const remove = (route, id) => {

  return axiosInstance.delete(`${route}/${id}`,  {
      headers:  getAuthorizationToken(),
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};



export const get = (route) => {
  return axiosInstance.get( `${route}`,  {
    headers: getAuthorizationToken(),
  })
}


export const post = (route, payload) => {
  return axiosInstance.post(route, payload,  {
    headers: getAuthorizationToken(),
  })
}

export const put = (route, id, payload) => {
  return axiosInstance.put(`${route}/${id}`, payload,  {
    headers: getAuthorizationToken(),
  })
}


export const getById = (path, id) => {
  return axiosInstance.get(`${path}${id}`);
};

