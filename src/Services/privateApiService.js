import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

<<<<<<< HEAD
const config = {
  headers: {
    // Group: 01, //Aqui va el ID del equipo!!
    Authorization: localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : null,
=======
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
>>>>>>> b6305fcb037f58a8e33fb38971b1566cefb5729a
  },
});

<<<<<<< HEAD
export const Delete = (route, id) => {
  return axios
    .delete(`${BASE_URL}/${route}/${id}`, config)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
=======
export const remove = (route, id) => {
>>>>>>> b6305fcb037f58a8e33fb38971b1566cefb5729a

  return axiosInstance.delete(`${route}/${id}`,  {
      headers:  getAuthorizationToken(),
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

<<<<<<< HEAD
// PATCH METHOD
export const patchPrivate = async (endpoint, id, body) => {
  try {
    const response = await axios.patch(
      `http://ongapi.alkemy.org/api/${endpoint}/${id}`,
      body,
      {
        headers: tokenFunction(),
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const PutPrivate = async (endpoint, body, id) => {
  try {
    const res = axios.put(
      `http://ongapi.alkemy.org/api/${endpoint}/${id}`,
      body,
      config
    );

    return res;
  } catch (err) {
    return err;
  }
};
=======
export const get = (route, id) => {
  const fullRoute = id ? `${route}/${id}` : `${route}`;
  return axiosInstance.get(fullRoute,  {
    headers: getAuthorizationToken(),
  });
};

export const post = (route, payload) => {
  return axiosInstance.post(route, payload, {
    headers: getAuthorizationToken(),
  })
}

export const put = (route, body, id) => {

  return axiosInstance.put(`${route}/${id}`, body, {
      headers:  getAuthorizationToken(),
    })
    .then(res => res.data)
    .catch(error => console.log(error));
}
>>>>>>> b6305fcb037f58a8e33fb38971b1566cefb5729a
