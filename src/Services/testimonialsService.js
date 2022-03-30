import { get, post, remove, put } from './publicApiService';

export const getTestimonials = () => {
  return get(process.env.REACT_APP_TESTIMONIALS)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postTestimoials = (payload) => {
  return post(process.env.REACT_APP_TESTIMONIALS, payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const deleteTestimonials = (id) => {
  return remove(process.env.REACT_APP_TESTIMONIALS, id)
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const editTestimonials = (id, payload) => {
  return put(process.env.REACT_APP_TESTIMONIALS, id, payload)
    .then(res => res.data)
    .catch(error => console.log(error));
};
