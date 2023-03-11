import { requestFunc } from './api';

export async function loginUser(data) {
    const userData = await requestFunc(`POST`, `/users/login`, data);
    
    return await userData;
}

export async function registerUser(data) {
    const userData = await requestFunc(`POST`, `/users/register`, data);
    return await userData;
}

export async function logoutUser() {
    const userData = await requestFunc(`GET`, `/users/logout`);
    return await userData;
}
