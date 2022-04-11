/* eslint-disable camelcase */
import { remove, get, post, put } from './privateApiService';

export const getMembers = (id) => {
  const route = id ? `members/${id}` : 'members';
  return get(route)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postMember = (
  id,
  name,
  image,
  description,
  facebookUrl,
  linkedinUrl,
  created_at,
  updated_at,
  deleted_at
) => {
  const payload = {
    id: id,
    name: name,
    image: image,
    description: description,
    facebookUrl: facebookUrl,
    linkedinUrl: linkedinUrl,
    created_at: created_at,
    updated_at: updated_at,
    deleted_at: deleted_at
  };

  return post('members', payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const deleteMember = (id) => {
  return remove('members', id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const editMember = (id, payload) => {
  return put('members', id, payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
