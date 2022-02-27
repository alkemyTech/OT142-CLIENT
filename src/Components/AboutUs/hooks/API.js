import axios from "axios";

export  const API_MEMBERS = axios.create({
    baseURL: 'http://ongapi.alkemy.org/public/api/members'
});
