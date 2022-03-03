import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'http://ongapi.alkemy.org/api/slides'
});

export const getSlideRequest = () => {
    return apiInstance.get();
}

export const postSlideRequest = (values) => {
    return apiInstance.post('', values);
}

export const putSlideRequest = (id, values) => {
    return apiInstance.put(`/${id}`, values);
}

export const deleteSlideRequest = (id) => {
    return apiInstance.delete(`/${id}`);
}