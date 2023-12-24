import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutUserRequest } from '../../../../Store/Auth/Login/actions';

export default function Logout(){
    let navigate= useNavigate();
    let dispatch= useDispatch();
    React.useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            dispatch(logoutUserRequest(navigate));
        } else {
            navigate('/login');
        }
    })
}