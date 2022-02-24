import axios from 'axios';

const config = {
    headers: {
        Group: ''               //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const API_SERVICE_POST = axios.create({
    baseURL: 'http://ongapi.alkemy.org/public/api',
    method: 'post',
    url: '',
    responseType: 'json',
});


export default Get