import axios from "axios";

let API_URL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
    baseURL: API_URL
});

let token = localStorage.getItem('token');
if(token){
    api.defaults.headers.common["Authorization"] = `Bearer ${token.slice(1,-1)}`;
}

export default function setAccessToken(){
    let token = localStorage.getItem('token');
    api.defaults.headers.common["Authorization"] = `Bearer ${token.slice(1,-1)}`;
}

api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

export const get = async (url, config={}) => {
    return await api
    .get(url, {...config})
    .then((response) => response.data)
}

export const post = async (url, data, config={}) => {
    return await api
    .post(url, {...data}, {...config})
    .then((response) => response.data)
}

export const del = async (url, config={}) => {
    return await api
    .delete(url, {...config})
    .then((response) => response.data)
}

export const put = async (url, config={}) => {
    return await api
    .put(url, {...data}, {...config})
    .then((response) => response.data)
}