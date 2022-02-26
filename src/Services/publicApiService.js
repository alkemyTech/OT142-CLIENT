import axios from 'axios';

const config = {
    headers: {
        Group: 142                //Aqui va el ID del equipo!!
    }
}

export const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}