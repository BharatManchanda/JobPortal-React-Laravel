import Home from "../Pages/Public/Home"
import Login from "../Pages/Public/Auth/Login"
import Register from "../Pages/Public/Auth/Register"
import List from "../Pages/Admin/User/List";
import Dashboard from "../Pages/Admin/Dashboard";

const PublicRoute = [
    { path:'/', component: <Home /> },
    { path:'/login', component: <Login /> },
    { path:'/register', component: <Register /> },
];

const AdminRoute = [
    { path:'/admin/dashboard', component: <Dashboard /> },
    { path:'/admin/user', component: <List /> },
];

export {PublicRoute, AdminRoute};