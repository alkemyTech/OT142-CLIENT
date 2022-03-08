import { remove, get, post, put } from "./privateApiService";

const ENDPOINT = "contacts"

export const getContact = (id) => {
    return get(ENDPOINT, id)
        .then((res) => res.data)
        .catch((err) => console.log(err))
}; 

export const createContact = (data) => {
     return post(ENDPOINT, data)
        .then((res) => res.data)
        .catch((err) => console.log(err))
};

export const editContact = (data, id) => {
    return put(ENDPOINT, data, id)
        .then((res) => res.data)
        .catch((err) => console.log(err))
};

export const deleteContact = (id) => {
    return remove(ENDPOINT, id)
        .then((res) => res.data)
        .catch((err) => console.log(err))
};



