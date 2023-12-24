import React from 'react'
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';

const RoleMiddleware = (props, roleType) => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user.role == roleType) {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        );
    } else {
        return(
            <React.Fragment>
                <Navigate to={'/login'}  />
            </React.Fragment>
        );
    }
}
const AdminMiddleware = (props) => RoleMiddleware(props, 'admin');
const RecruiterMiddleware = (props) => RoleMiddleware(props, 'recruiter');
const ClientMiddleware = (props) => RoleMiddleware(props, 'client');
export {
    AdminMiddleware,
    RecruiterMiddleware,
    ClientMiddleware
}
