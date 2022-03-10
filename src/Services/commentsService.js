import { remove, get, post, put } from "./privateApiService";
import { showAlertErr } from './AlertServicie/AlertServicie';

export const getComment = (id) => {
  return get(process.env.REACT_APP_COMMENTS, id)
    .then((res) => res.data)
    .catch((error) => {
      showAlertErr();
      console.log(error)
    });
};

export const postComment = (payload) => {
  return post(process.env.REACT_APP_COMMENTS, payload)
    .then((res) => res.data)
    .catch((error) => {
      showAlertErr();
      console.log(error)
    });
}

export const deleteComment = (id) => {
  return remove(process.env.REACT_APP_COMMENTS, id)
    .then(res => res.data)
    .catch((error) => {
      showAlertErr();
      console.log(error)
    });
}

export const editComment = (id, payload) => {
  return put(process.env.REACT_APP_COMMENTS, id, payload)
    .then(res => res.data)
    .catch((error) => {
      showAlertErr();
      console.log(error)
    });
}

export const editNews = (id, payload) => {
  return put("news", id, payload)
    .then(res => res.data)
    .catch((error) => {
      showAlertErr();
      console.log(error)
    });
}