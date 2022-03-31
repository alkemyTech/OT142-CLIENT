import { get, post, put, remove, patch } from './privateApiService';

export const getRequest = async () => {
  const response = await get(process.env.REACT_APP_CATEGORIES);
  return response.data;
};

export const deleteRequest = async () => {
  return await remove(process.env.REACT_APP_CATEGORIES);
};

export const putRequest = async ({ name, description }) => {
  const response = await put(process.env.REACT_APP_CATEGORIES, {
    name,
    description
  });

  return response;
};
export const postRequest = async ({ name, description }) => {
  const response = await post(process.env.REACT_APP_CATEGORIES, {
    name,
    description

  });

  return response;
};

export const patchRequest = async ({ name, description }) => {
  const response = await patch(process.env.REACT_APP_CATEGORIES, {
    name,
    description

  });

  return response;
};
