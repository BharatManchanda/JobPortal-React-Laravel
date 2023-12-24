import { get, post, del, put } from "./ApiHelper";

const api = {
    auth:{
        signin: (data) => post('/login', data),
	    logout: () => post('/logout'),
        signup: (data) => post('/register', data),
        forgetPassword: (data) => post('/forget-password', data),
    },

    user:{
        list: (data) => post(`/user?page=${data.page}`, data),
        create: (data) => post('user/create', data),
        update: (data) => post('user/update', data),
        delete: (data) => post('user/delete', data),
        resetPassword: (data) => post('user/reset-password', data),
    }
};

export default api;