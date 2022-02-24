import axios from "axios";

const BASE_URL = "http://ongapi.alkemy.org/api";

const config = {
  headers: {
    // Group: 01, //Aqui va el ID del equipo!!
    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : null
  },
};

const Delete = (route, id) => {
  return axios.delete(`${BASE_URL}/${route}/${id}`, config)
    .then(res => res.data)
    .catch(error => console.log(error));
}
export default Delete;
