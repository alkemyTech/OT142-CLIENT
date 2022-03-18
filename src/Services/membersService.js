/* eslint-disable camelcase */
import { remove, get, post, put } from "./privateApiService";

const path = process.env.REACT_APP_MEMBERS;

export const getMembers = (id) => {
  const fullPath = id ? `${path}/${id}` : path;
  return get(fullPath)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postMember = (payload) => {
  return post("members", payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const deleteMember = (id) => {
  return remove("members", id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const putMember = (id, payload) => {
  return put("members", id, payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
