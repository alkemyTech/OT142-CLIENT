/* eslint-disable camelcase */
import { remove, get, post, put } from './privateApiService';

export const getActivities = (id) => {
  return get('activities', id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postActivity = (id, name, slug, description, image, user_id, category_id, created_at, updated_at, deleted_at) => {
  const payload = {
    id: id,
    name: name,
    slug: slug,
    content: description,
    image: image,
    user_id: user_id,
    category_id: category_id,
    created_at: created_at,
    updated_at: updated_at,
    deleted_at: deleted_at
  };
  return post('activities', payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const deleteActivity = (id) => {
  return remove('activities', id)
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const editActivity = (id, payload) => {
  return put('activities', id, payload)
    .then(res => res.data)
    .catch(error => console.log(error));
};
