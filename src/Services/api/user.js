import { get, getById, put, post, remove } from '../publicApiService';

export const getUsers = () => {
  return get('/users?limit=10')
    .then(res => {
      if (res.status === 200) return res.data;
      return Promise.reject(res.statusText);
    });
};

export const getUser = (id) => {
  return getById('/users', id)
    .then(res => {
      if (res.status === 200) return res.data;
      return Promise.reject(res.statusText);
    });
};

export const createUser = (user) => {
  const createNewUser = { ...user };

  return post('/users', createNewUser)
    .then(res => {
      if (res.status === 200) return res.data;
      return Promise.reject(res.statusText);
    });
};

export const editUser = (id, user) => {
  const updateUser = { ...user };

  return put('/users', id, updateUser)
    .then(res => res.data);
};

export const deleteUser = (id) => {
  return remove('/users', id)
    .then(res => res.data);
};
