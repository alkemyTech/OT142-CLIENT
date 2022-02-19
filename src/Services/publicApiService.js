import axios from 'axios';

// const config = {
//     headers: {
//         Group: 142                //Aqui va el ID del equipo!!
//     }
// }

// const Get = () => {
//     axios.get('https://jsonplaceholder.typicode.com/users', config)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// }

const BASE_URL = 'http://ongapi.alkemy.org/api';

const getId = async(url, id) => {

    let getData = {
        data: {},
        err: null
    };

    try{

        const res = await axios.get(`${url}/${id}`);
        const { data } = await res.data;

        getData = {
            ...getData,
            data
        }

    }catch(error){
        getData = {
            data: {},
            err: {
                message: 'Id no encontrado',
                status: true,
                error
            }
        }
    }

    return getData
}

const getNew = async(id) => {

    let getData = {
        data: {},
        err: null
    };

    try{

        const res = await axios.get(`${BASE_URL}/news/${id}`);
        const { data } = await res.data;
        const { name, image, content, parent_category_id } = data;

        getData = {
            ...getData,
            data: {
                title: name,
                content,
                category: parent_category_id || '',
                image
            }
        }

    }catch(error){
        getData = {
            data: {},
            err: {
                message: 'Id no encontrado',
                status: true,
                error
            }
        }
    }

    return getData
}

const postNew = async(data) => {

    let status = {
        complete: null,
        error: null
    }

    axios.post(`${BASE_URL}/news`, data)
      .then((res) => {
        console.log(res);
        status = {
            complete: true,
            error: null
        }
      })
      .catch((error) => {
        console.log(error);
        status = {
            complete: null,
            error
        }
      });

    return status
}

const patchNew = async(data) => {

    let status = {
        complete: null,
        error: null
    }

    axios.patch(`${BASE_URL}/news`, data)
      .then((res) => {
        console.log(res);
        status = {
            complete: true,
            error: null
        }
      })
      .catch((error) => {
        console.log(error);
        status = {
            complete: null,
            error
        }
      });

    return status
}

export {
    getId,
    getNew,
    postNew,
    patchNew
}