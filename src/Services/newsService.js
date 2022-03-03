import { Delete, Get, Post, Put } from "./privateApiService";

export const getNews = (route, id) => {
  return Get(route, id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postNews = (route, id, name, slug, content, image, user_id, category_id, created_at, updated_at, deleted_at, group_id) => {
    const payload = {
        id: id,
        name: name,
        slug: slug,
        content: content,
        image: image,
        user_id: user_id,
        category_id: category_id,
        created_at: created_at,
        updated_at: updated_at,
        deleted_at: deleted_at,
        group_id: group_id
    };
    const Post= Post(route, payload)
      .then((res) => res.data)
      .catch((error) => console.log(error));
      return Post
};

export const deleteNews = (route, id) => {
    return Delete(route, id)
        .then(res => res.data)
        .catch(error => console.log(error))
}

export const editNews = (route, id, payload) => {
   const Put=Put(route, id, payload)
        .then(res => res.data)
        .catch(error => console.log(error))
        return Put
}



