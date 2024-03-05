import { data } from "autoprefixer";
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAuthToken = () => {
    return window.localStorage.getItem('token');
}

export const setAuthToken = (token: string) => {
    return window.localStorage.setItem('token', token);
}

export const request = (method, url, data) => {
    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = { "Authorization": `Bearer ${getAuthToken()}` }
    }

    return axios({
        method: method,
        url,
        data,
        headers
    });
}