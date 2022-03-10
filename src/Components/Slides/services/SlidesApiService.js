import axios from "axios";
import { get } from "../../../Services/publicApiService";
import { post, put, remove } from "../../../Services/privateApiService";

const path = process.env.REACT_APP_SLIDES;

export const getSlideRequest = (id) => {
  const fullPath = id ? `${path}/${id}` : path;
  return get(fullPath);
};

export const postSlideRequest = (values) => {
  return post(path, values);
};

export const putSlideRequest = (id, values) => {
  return put(id, values);
};

export const deleteSlideRequest = (id) => {
  const fullPath = `${path}/${id}`;
  return remove(fullPath);
};
