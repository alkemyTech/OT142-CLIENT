import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://ongapi.alkemy.org/api'
});
