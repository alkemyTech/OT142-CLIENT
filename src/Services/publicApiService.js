import axios from 'axios';

<<<<<<< HEAD
const config = {
    headers: {
        Group: ''               //Aqui va el ID del equipo!!
=======
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

const getCategories = async(id) => {

    let categories = [];

    try{

        const res = await axios.get(`${BASE_URL}/categories`);
        const { data } = await res.data;

        categories = data.map(d => d.id)

    }catch(error){
        console.log(error)
>>>>>>> 041eec2818efceb20f2ea8fb44b27ae176a13ad5
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

<<<<<<< HEAD
export const API_SERVICE_POST = axios.create({
    baseURL: 'http://ongapi.alkemy.org/public/api',
    method: 'post',
    url: '',
    responseType: 'json',
});


export default Get
=======
export {
    getCategories,
    getNew,
    postNew,
    patchNew
}
>>>>>>> 041eec2818efceb20f2ea8fb44b27ae176a13ad5
