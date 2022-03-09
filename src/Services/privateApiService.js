import axios from "axios";

const BASE_URL = "http://ongapi.alkemy.org/api";

const getAuthorizationToken = () => {
  const auth = {
    Authorization: localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : null,
  };
  return auth;
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers : {
    Group: "142" 
  }
});


export const remove = (route, id) => {
  return axios.delete(`${BASE_URL}/${route}/${id}`,  {
      headers:  getAuthorizationToken(),
    })
    .then(res => res.data)
    .catch(error => console.log(error));
}


export const get = (route, id) => {
  const fullRoute = id ? `${BASE_URL}/${route}/${id}` : `${BASE_URL}/${route}`;
  return axiosInstance.get(fullRoute,  {
    headers: getAuthorizationToken(),
  })
}

export const post = (route, payload) => {
  return axiosInstance.post(route, payload,  {
    headers: getAuthorizationToken(),
  })
}

export const remove = (path, id) => {
  return axiosInstance.delete(`${path}/${id}`);
};
