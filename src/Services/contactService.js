import { remove, get, post, put } from "./privateApiService";
import { showAlertErr } from './AlertServicie/AlertServicie';

const ENDPOINT = process.env.REACT_APP_CONTACTS;

export const getContact = (id) => {
    return get(ENDPOINT, id)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
            showAlertErr();
        });
};

export const createContact = (data) => {
    return post(ENDPOINT, data)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
            showAlertErr();
        });
};

export const editContact = (data, id) => {
    return put(ENDPOINT, data, id)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
            showAlertErr();
        });
};

export const deleteContact = (id) => {
    return remove(ENDPOINT, id)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
            showAlertErr();
        });
};



