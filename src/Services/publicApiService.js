import axios from "axios";
import { showAlertErr } from "./AlertServicie/AlertServicie";

export const axiosInstance = axios.create({
  baseURL: "https://ongapi.alkemy.org/api",
  headers: {
    Group: "142",
  },
});

export const get = (path) => {
  return axiosInstance.get(path)
    .catch(err => showAlertErr({
      text: `Error en la peticion get path: ${path}`
    }));
};

export const getById = (path, id) => {
  return axiosInstance.get(`${path}/${id}`)
    .catch(err => showAlertErr({
      text: `Error en la peticion del getId, path: ${path}`
    }));
};

export const put = (path, id, body) => {
  return axiosInstance.put(`${path}/${id}`, body)
    .catch(err => showAlertErr({
      text: `Error en la peticion del put, path: ${path}`
    }));
};

export const post = (path, body) => {
  return axiosInstance.post(path, body)
    .catch(err => showAlertErr({
      text: `Error en la peticion de post, path: ${path}`
    }));
};

export const remove = (path, id) => {
  return axiosInstance.delete(`${path}/${id}`)
    .catch(err => showAlertErr({
      text: `Error en la peticion delete, path: ${path}`
    }));
}