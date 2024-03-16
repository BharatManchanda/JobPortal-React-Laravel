import { get, post, del, put } from "./ApiHelper";

const api = {
    auth:{
        signin: (data) => post('/login', data),
	    logout: () => post('/logout'),
        signup: (data) => post('/register', data),
        forgetPassword: (data) => post('/forget-password', data),
    },

    user: {
        list: (data) => post(`/user?page=${data.page}`, data),
        get: (data) => get(`/user/${data.id}`),
        create: (data) => post(`/user/create`, data),
        update: (data) => put(`/user/${data.id}/update`, data),
        delete: (data) => del(`/user/${data.id}/delete`),
        chat: (data) => post(`/user/chat`, data),
        resetPassword: (data) => post(`user/reset-password`, data),
    },

    job: {
        list:(data) => post(`job?page=${data.page}`, data),
        get: (data) => get(`/job/${data.id}`),
        create: (data) => post(`/job/create/`, data),
        update: (data) => put(`/job/${data.id}/update`, data),
        delete: (data) => del(`/job/${data.id}/delete`),
    },
};

export default api;