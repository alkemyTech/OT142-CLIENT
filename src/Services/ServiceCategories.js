import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://ongapi.alkemy.org/api'
});

export const getRequest = (path) => {
  const response = axiosInstance.get(path);
  console.log(response);
  return response;
};
export const deleteRequest = (path) => {
  return axiosInstance.delete(path);
};

export const putRequest = (path, { name, description }) => {
  const response = axiosInstance.put('/categories', {
    name,
    description

  });

  return response;
};
export const postRequest = (path, { name, description }) => {
  const response = axiosInstance.post('/categories', {
    name,
    description

  });

  return response;
};

export const patchRequest = (path, { name, description }) => {
  const response = axiosInstance.patch(path, {
    name,
    description

  });

  return response;
};
