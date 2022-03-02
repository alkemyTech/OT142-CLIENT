import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `http://ongapi.alkemy.org/public/api`,
});

export const getRequest = (path) => {
    const response = axiosInstance.get(path);
    return response
};

export const putRequest = (path, { name, description, image }) => {
    const response = axiosInstance.put("/activities", {
        name,
        description,
        image
    })
    return response
};

export const postRequest = (path, { name, description, image }) => {
    const response = axiosInstance.post("/activities", {
        name,
        description,
        image
    });
    return response
};

export const deleteRequest = (path) => {
    return axiosInstance.delete(path);
};

export const patchRequest = (path, { name, description, image }) => {
    const response = axiosInstance.patch(path, {
        name,
        description,
        image
    });
    return response
};


