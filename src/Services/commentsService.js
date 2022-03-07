import { remove, get, post, put } from "./privateApiService";

export const getComment = (id) => { 
  return get("comments", id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postComment = (payload) => {
  return post("comments", payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export const deleteComment = (id) => { 
  return remove("comments", id)
    .then(res => res.data)
    .catch(error => console.log(error))
}

export const editComment = (id, payload) => { 
  return put("comments", id, payload)
    .then(res => res.data)
    .catch(error => console.log(error))
}

export const editNews = ( id, payload) => {
  return put("news", id, payload)
    .then(res => res.data)
    .catch(error => console.log(error))
}