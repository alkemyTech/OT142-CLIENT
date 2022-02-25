import axios from "axios"

const baseURL = 'http://ongapi.alkemy.org/api/comments';

async function getComment() { 
    try {
        const response = await axios.get(`${baseURL}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const sendComment = () => { 
    axios
    .post(`${baseURL}`, {
            "id": 0,
            "new_id": 0,
            "user_id": 0,
            "image": "string",
            "text": "string",
            "visible": true,
            "deleted_at": "2022-02-24T22:11:59.684Z",
            "created_at": "2022-02-24T22:11:59.684Z",
            "updated_at": "2022-02-24T22:11:59.684Z"
        })
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        })
  }
 
async function getCommentById(id) { 
    try {
        const response = await axios.get(`${baseURL}/${id}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

const updateComment = (id) => { 
    axios
      .put(`${baseURL}/${id}`, {
            "id": 0,
            "new_id": 0,
            "user_id": 0,
            "image": "string",
            "text": "string",
            "visible": true,
            "deleted_at": "2022-02-24T22:15:45.643Z",
            "created_at": "2022-02-24T22:15:45.643Z",
            "updated_at": "2022-02-24T22:15:45.643Z"
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

const deleteComment = (id) => { 
    axios
      .delete(`${baseURL}/${id}`, {
            "id": 0,
            "new_id": 0,
            "user_id": 0,
            "image": "string",
            "text": "string",
            "visible": true,
            "deleted_at": "2022-02-24T22:15:45.643Z",
            "created_at": "2022-02-24T22:15:45.643Z",
            "updated_at": "2022-02-24T22:15:45.643Z"
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
 }

export {getComment, sendComment, getCommentById, updateComment, deleteComment}