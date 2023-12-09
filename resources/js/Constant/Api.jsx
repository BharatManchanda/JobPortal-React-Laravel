import { get, post, del, put } from "./ApiHelper";

const api = {
    auth:{
        signin: (data) => post('/login', data),
	    logout: () => post('/logout'),
        signup: (data) => post('/register', data),
        forgetPassword: (data) => post('/forget-password', data),
    },
};

export default api;