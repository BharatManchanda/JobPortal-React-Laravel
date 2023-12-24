import Home from "../Pages/Public/Home"
import Login from "../Pages/Public/Auth/Login"
import Register from "../Pages/Public/Auth/Register"
import Logout from "../Pages/Public/Auth/Logout";

import List from "../Pages/Admin/User/List";
import Dashboard from "../Pages/Admin/Dashboard";
import CreateOrEdit from "../Pages/Admin/User/CreateOrEdit";
const PublicRoute = [
    { path:'/', component: <Home /> },
    { path:'/login', component: <Login /> },
    { path:'/logout', component: <Logout /> },
    { path:'/register', component: <Register /> },
];

const AdminRoute = [
    { path:'/admin/dashboard', component: <Dashboard /> },
    { path:'/admin/user', component: <List /> },
    { path:'/admin/user/create', component: <CreateOrEdit /> },
];

export {PublicRoute, AdminRoute};