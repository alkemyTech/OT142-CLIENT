import axios from "axios";

const BASE_URL = "http://ongapi.alkemy.org/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const config = {
  headers: {
    // Group: 01, //Aqui va el ID del equipo!!
    Authorization: localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : null,
  },
};

const Get = (route, id) => {
  const endPoint = id ? `/${route}/${id}` : `${route}`;

  return axiosInstance
    .get(endPoint)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const Post = (route, data) => {
  axiosInstance
    .post(route, data)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const Delete = (route, id) => {
  return axios
    .delete(`${BASE_URL}/${route}/${id}`, config)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const tokenFunction = () => {
  return config.headers.Authorization;
};

//  Members HTTP Methods:

export const getMember = (id) => {
  return Get("members", id);
};

export const getMembers = () => {
  return Get("members");
};

export const postMember = (member) => {
  Post("members", member);
};

export const deleteMember = (id) => {
  Delete("members", id);
};

// PATCH METHOD
export const patchPrivate = async (endpoint, id, body) => {
  try {
    const response = await axios.patch(
      `http://ongapi.alkemy.org/api/${endpoint}/${id}`,
      body,
      {
        headers: tokenFunction(),
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};
