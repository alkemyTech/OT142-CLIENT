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

const sendComment = (comment) => { 
    axios
    .post(`${baseURL}`, {
            comment
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

const updateComment = (comment, id) => { 
    axios
      .put(`${baseURL}/${id}`, {
        comment
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
      .delete(`${baseURL}/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
 }

export {getComment, sendComment, getCommentById, updateComment, deleteComment}