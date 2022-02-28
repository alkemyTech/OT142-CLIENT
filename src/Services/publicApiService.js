import axios from 'axios';

// const config = {
//     headers: {
//         Group: 142                //Aqui va el ID del equipo!!
//     }
// }

export const axiosInstance = axios.create({
    baseURL: 'http://ongapi.alkemy.org/api',
});
  
export const getRequestAll = (path) => {
    return axiosInstance.get(path);
};

export const getRequestById = (path) => {
    return axiosInstance.get(path);
};

export const putRequest = (path, body) => {
    return axiosInstance.put(path, body);
};

export const postRequest = (path, body) => {
    return axiosInstance.post(path, body);
};

export const deleteRequest = (path) => {
    return axiosInstance.delete(path);
};

export const API_SERVICE_POST = axios.create({
    BASE_URL: 'http://ongapi.alkemy.org/public/api',
    method: 'post',
    url: '',
    responseType: 'json',
});
