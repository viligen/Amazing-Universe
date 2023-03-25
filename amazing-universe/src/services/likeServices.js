import { requestFunc } from './api';

export async function getAllLikes(postId) {
    const likes = await requestFunc(
        `GET`,
        `/data/likes?where=postId%3D%22${postId}%22&distinct=_ownerId&count`
    );

    return await likes;
}

export async function getOwnLike(postId, userId) {
    const userData = await requestFunc(
        `GET`,
        `/data/likes?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`
    );
    return (await userData) !== 0;
}

export async function actionLike(postId) {
    const userData = await requestFunc(`POST`, `/data/likes`, {
        postId,
    });
    return await userData;
}

export async function getTotalLikesPerUser(userId) {
    const likes = await requestFunc(
        `GET`,
        `/data/likes?where=_ownerId%3D%22${userId}%22&count`
    );

    return await likes;
}
