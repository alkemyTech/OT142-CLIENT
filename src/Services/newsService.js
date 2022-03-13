import { remove, get, post, put } from "./privateApiService";

export const getNews = (id) => {
    return get(process.env.REACT_APP_NEWS, id)
        .then((res) => res.data)
        .catch((error) => console.log(error));
};

export const postNews = (id, name, slug, content, image, user_id, category_id, created_at, updated_at, deleted_at, group_id) => {
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
    return post(process.env.REACT_APP_NEWS, payload)
        .then((res) => res.data)
        .catch((error) => console.log(error));

};

export const deleteNews = (id) => {
    return remove(process.env.REACT_APP_NEWS, id)
        .then(res => res.data)
        .catch(error => console.log(error))
}

export const editNews = (id, payload) => {
    return put(process.env.REACT_APP_NEWS, id, payload)
        .then(res => res.data)
        .catch(error => console.log(error))

}



