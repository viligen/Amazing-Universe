import { requestFunc } from './api';

export async function getAllPosts() {
    const postsData = await requestFunc(
        `GET`,
        `/data/posts?sortBy=_createdOn%20desc`
    );
    return await postsData;
}

export async function getOnePost(post_id) {
    const postData = await requestFunc(`GET`, `/data/posts/${post_id}`);
    return await postData;
}

export async function editPost(post_id, data) {
    const postData = await requestFunc(`PUT`, `/data/posts/${post_id}`, data);
    return await postData;
}
export async function deletePost(post_id) {
    const postData = await requestFunc(`DELETE`, `/data/posts/${post_id}`);
    return await postData;
}

export async function createPost(data) {
    const postData = await requestFunc(`POST`, `/data/posts/`, data);
    return await postData;
}

export async function getMyPosts(userId) {
    const postsData = await requestFunc(
        `GET`,
        `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
    );
    return await postsData;
}
