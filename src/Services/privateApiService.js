import axios from "axios";

<<<<<<< HEAD
export const axiosInstance = axios.create({
  baseURL: "https://ongapi.alkemy.org/api",
  headers: {
    Group: "142",
  },
});

export const get = (path) => {
  return axiosInstance.get(path);
};

export const getById = (path, id) => {
  return axiosInstance.get(`${path}/${id}`);
};

export const put = (path, id, body) => {
  return axiosInstance.put(`${path}/${id}`, body);
};

export const post = (path, body) => {
  return axiosInstance.post(path, body);
};

export const remove = (path, id) => {
  return axiosInstance.delete(`${path}/${id}`);
};
=======
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
>>>>>>> main
