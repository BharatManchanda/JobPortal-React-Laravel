import axios from "axios";

const api = axios.create();

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