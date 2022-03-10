import { remove, post, put } from "./privateApiService";
import { get } from "./publicApiService";
import { showAlertErr } from './AlertServicie/AlertServicie';


export const getSlides = (id = null) => {
  return get("slides", id)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error)
      showAlertErr();
    });
};

export const postSlides = (data) => {

  return post("slides", data)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error)
      showAlertErr();
    });
};

export const deleteSlides = (id) => {
  return remove("slides", id)
    .then(res => res.data)
    .catch((error) => {
      console.log(error)
      showAlertErr();
    });
}

export const editSlides = (id, payload) => {
  return put("slides", id, payload)
    .then(res => res.data)
    .catch((error) => {
      console.log(error)
      showAlertErr();
    });
}



