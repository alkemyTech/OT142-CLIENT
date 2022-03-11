import { showAlertErr } from "./AlertServicie/AlertServicie";
import { remove, get, post, put } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_ACTIVITY;

export const getActivity = (id) => {
    return get(ENDPOINT, id)
        .then((res) => res.data)
        .catch((err) => {
            return  showAlertErr( {text: err}),
            console.log(err)
        })
}; 

export const createActivity = (data) => {
     return post(ENDPOINT, data)
        .then((res) => res.data)
        .catch((err) => {
            return  showAlertErr({text: err}),
            console.log(err)
        }
        )
};

export const editActivity = (data, id) => {
    return put(ENDPOINT, data, id)
        .then((res) => res.data)
        .catch((err) => {
            return  showAlertErr({text: err}),
            console.log(err)
        })
};

export const deleteActivity = (id) => {
    return remove(ENDPOINT, id)
        .then((res) => res.data)
        .catch((err) => {
            return  showAlertErr({text: err}),
            console.log(err)
        })
};



