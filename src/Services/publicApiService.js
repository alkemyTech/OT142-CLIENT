import axios from "axios";
import { API } from "../Activities/Detail/hooks/API";

const config = {
  headers: {
    Group: "", //Aqui va el ID del equipo!!
  },
};

export const API_SERVICE_POST = axios.create({
  BASE_URL: "http://ongapi.alkemy.org/public/api",
  method: "post",
  url: "",
  responseType: "json",
});

export const axiosInstance = axios.create({
  baseURL: "http://ongapi.alkemy.org/public/api",
  responseType: "json",
});

export const getRequest = (path, id) => {
  const route = id ? `${path}/${id}` : `${path}`;

  return axiosInstance
    .get(route)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
