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

export const axiosInstance = axios.create({
    baseURL: 'http://ongapi.alkemy.org/api',
});
  
export const getRequest = (path) => {
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

const getCategories = async(id) => {

    let categories = [];

    try{

        const res = await axios.get(`${BASE_URL}/categories`);
        const { data } = await res.data;

        categories = data.map(d => d.id)

    }catch(error){
        console.log(error)
    }

    return categories
}

const getNew = async(id) => {

    let getData = {
        data: {},
        err: null
    };

    try{

        const res = await axios.get(`${BASE_URL}/news/${id}`);
        const { data } = await res.data;
        const { name, image, content, category_id } = data;

        getData = {
            ...getData,
            data: {
                title: name,
                content,
                category: category_id || '',
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

    axios.post(`${BASE_URL}/news`, data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        });

}

const patchNew = async(id, data) => {

    axios.put(`${BASE_URL}/news/${id}`, data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        });
}

export {
    getCategories,
    getNew,
    postNew,
    patchNew
}