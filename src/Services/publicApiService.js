import axios from 'axios';

const config = {
    headers: {
        Group: 142                
    }
}

//Setting default global config for all request:
export const axiosInstance = axios.create({
  baseURL: 'http://ongapi.alkemy.org/api'
});

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export function updatePublicServer(path, id, body) {
    axiosInstance
      .put(`${path}/${id}`, {
        body
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }


export default Get