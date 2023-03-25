import { requestFunc } from './api';

export async function getAllPosts() {
    const postsData = await requestFunc(
        `GET`,
        `/data/posts?sortBy=_createdOn%20desc`
    );
    return await postsData;
}

export async function getLimitedPosts(count) {
    const postsData = await requestFunc(
        `GET`,
        `/data/posts?sortBy=_createdOn%20desc&offset=0&pageSize=${count}`
    );
    return await postsData;
}

export async function getOnePost(postId) {
    const postData = await requestFunc(`GET`, `/data/posts/${postId}`);
    return await postData;
}

export async function editPost(postId, data) {
    const postData = await requestFunc(`PUT`, `/data/posts/${postId}`, data);
    return await postData;
}
export async function deletePost(postId) {
    const postData = await requestFunc(`DELETE`, `/data/posts/${postId}`);
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
