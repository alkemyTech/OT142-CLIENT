/* eslint-disable camelcase */
import { remove, get, post, put, getSearch } from './privateApiService';

export const getActivities = (id) => {
  return get('activities', id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getSearchActivities = (word) => {
  return getSearch('activities', word)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postActivity = (payload) => {
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
