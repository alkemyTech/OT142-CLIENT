import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://ongapi.alkemy.org/public/api',
});