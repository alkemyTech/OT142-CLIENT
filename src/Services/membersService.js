import { remove, get, post, put } from "./privateApiService";

const path = process.env.REACT_APP_MEMBERS;

export const getMembers = (id) => {
  const fullPath = id ? `${path}/${id}` : path;
  return get(fullPath)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postMember = (member) => {
  const payload = member;
  return post(path, payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const deleteMember = (id) => {
  return remove(path, id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const editMember = (id, payload) => {
  return put(path, id, payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
