import axios from "axios";

const BASE_URL = "http://ongapi.alkemy.org/api";

const config = {
  headers: {
    // Group: 01, //Aqui va el ID del equipo!!
    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : null
  },
};

export const Delete = (route, id) => {
  return axios.delete(`${BASE_URL}/${route}/${id}`, config)
    .then(res => res.data)
    .catch(error => console.log(error));
}

export const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// PATCH METHOD
export const patchPrivate = async (endpoint, id, body) => {
  try {
    const response = await axios.patch(`http://ongapi.alkemy.org/api/${endpoint}/${id}`, body, {
      headers: tokenFunction(),
    });
    return response;
  } catch (err) {
    return err;
  }
};

