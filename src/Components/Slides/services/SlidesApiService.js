import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_SLIDES}`;

const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export const getSlideRequest = () => {
  return apiInstance.get();
};

export const postSlideRequest = (values) => {
  return apiInstance.post("", values);
};

export const putSlideRequest = (id, values) => {
  return apiInstance.put(id, values);
};

export const deleteSlideRequest = (id) => {
  return apiInstance.delete(id);
};
