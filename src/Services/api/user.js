import { getRequestAll, getRequestById, putRequest, postRequest, deleteRequest } from '../publicApiService';

export const getUsers = () => {

    return getRequestAll(`/users?limit=10`)
        .then(res => {
            if (res.status === 200) return res.data;
            return Promise.reject(res.statusText);
        })

}

export const getUser = (id) => {

    return getRequestById(`/users/${id}`)
        .then(res => {
            if(res.status === 200) return res.data;
            return Promise.reject(res.statusText);
        })

}

export const createUser = (user) => {

    const createNewUser = {...user};

    return postRequest('/users', createNewUser)
        .then(res => {
            if(res.status === 200) return res.data;
            return Promise.reject(res.statusText);
        })

}

export const editUser = (id, user) => {

    const updateUser = {...user};

    return putRequest(`/users/${id}`, updateUser)
        .then(res => res.data);

}

export const deleteUser = (id) => {

    return deleteRequest(`/users/${id}`)
        .then(res => res.data);

}