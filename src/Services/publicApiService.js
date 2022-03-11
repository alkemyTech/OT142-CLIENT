import axios from "axios";

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
 