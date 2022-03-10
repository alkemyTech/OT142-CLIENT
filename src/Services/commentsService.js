import { remove, get, post, put } from "./privateApiService";

export const getComment = (id) => { 
  return get(process.env.REACT_APP_COMMENTS, id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postComment = (id, new_id, user_id, image, text, visible, deleted_at, created_at, updated_at, group_id) => { 
  const payload = {
      id: id,
      new_id: new_id,
      user_id: user_id,
      image: image,
      text: text,
      visible: visible,
      deleted_at: deleted_at,
      created_at: created_at,
      updated_at: updated_at,
      group_id: group_id
  };
  return post(process.env.REACT_APP_COMMENTS, payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export const deleteComment = (id) => { 
  return remove(process.env.REACT_APP_COMMENTS, id)
    .then(res => res.data)
    .catch(error => console.log(error))
}

export const editComment = (id, payload) => { 
  return put(process.env.REACT_APP_COMMENTS, id, payload)
    .then(res => res.data)
    .catch(error => console.log(error))
}

export const editNews = ( id, payload) => {
  return put("news", id, payload)
    .then(res => res.data)
    .catch(error => console.log(error))
}