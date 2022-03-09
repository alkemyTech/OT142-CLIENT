import { remove, get, post, put } from "./privateApiService";

export const getComment = (id) => { 
  return get(process.env.REACT_APP_ROUTE_COMMENTS, id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postComment = (payload) => { 
  return post(process.env.REACT_APP_ROUTE_COMMENTS, payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export const deleteComment = (id) => { 
  return remove(process.env.REACT_APP_ROUTE_COMMENTS, id)
    .then(res => res.data)
    .catch(error => console.log(error))
}

export const editComment = (id, payload) => { 
  return put(process.env.REACT_APP_ROUTE_COMMENTS, id, payload)
    .then(res => res.data)
    .catch(error => console.log(error))
}