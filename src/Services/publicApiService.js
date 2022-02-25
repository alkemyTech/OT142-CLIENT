import axios from 'axios';

const config = {
    headers: {
        Group: 142                
    }
}

//Setting default global config for all request:

axios.defaults.headers.common['Group'] = 142

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export function updatePublicServer(url, id, body) {
    axios
      .put(`${url}/${id}`, {
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