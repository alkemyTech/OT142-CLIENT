import axios from 'axios';

const config = {
    headers: {
        Group: ''               //Aqui va el ID del equipo!!
    }
}


export const API_SERVICE_POST = axios.create({
    BASE_URL: 'http://ongapi.alkemy.org/public/api',
    method: 'post',
    url: '',
    responseType: 'json',
});
