import axios from 'axios';

const config = {
    headers: {
        Group: ''               //Aqui va el ID del equipo!!
    },

    return: categories,
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

export const API_SERVICE_POST = axios.create({
    baseURL: 'http://ongapi.alkemy.org/public/api',
    method: 'post',
    url: '',
    responseType: 'json',
});


export default Get
