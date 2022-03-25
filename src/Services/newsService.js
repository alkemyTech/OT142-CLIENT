/* eslint-disable camelcase */
import { remove, get, post, put } from './privateApiService';

export const getNews = (id) => {
  return get('news', id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const searchNew = (name) => {
  return get(`news?search=${name}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postNews = (id, name, slug, content, image, user_id, category_id, created_at, updated_at, deleted_at, group_id) => {
  const payload = {
    id: id,
    name: name,
    slug: slug,
    content: content,
    image: image,
    user_id: user_id,
    category_id: category_id,
    created_at: created_at,
    updated_at: updated_at,
    deleted_at: deleted_at,
    group_id: group_id
  };
  return post('news', payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const deleteNews = (id) => {
  return remove('news', id)
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const editNews = (id, payload) => {
  return put('news', id, payload)
    .then(res => res.data)
    .catch(error => console.log(error));
};
