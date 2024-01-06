import { get, post, del, put } from "./ApiHelper";

const api = {
    auth:{
        signin: (data) => post('/login', data),
	    logout: () => post('/logout'),
        signup: (data) => post('/register', data),
        forgetPassword: (data) => post('/forget-password', data),
    },

    user:{
        list: (data) => post(`/user?page=${1+data.page}`, data),
        get: (data) => get(`/user/${data.id}`),
        create: (data) => post('user/create', data),
        update: (data) => put(`user/${data.id}/update`, data),
        delete: (data) => post('user/delete', data),
        chat: (data) => post('user/chat', data),
        resetPassword: (data) => post('user/reset-password', data),
    }
};

export default api;