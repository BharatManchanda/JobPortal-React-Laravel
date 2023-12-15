import Home from "../Pages/Public/Home"
import Login from "../Pages/Public/Auth/Login"
import Register from "../Pages/Public/Auth/Register"
import AuthenticatedLayout from "../Components/AdminLayout";

const PublicRoute = [
    { path:'/', component: <Home /> },
    { path:'/login', component: <Login /> },
    { path:'/register', component: <Register /> },
];

const AuthenticateRoute = [
    { path:'/authenticated', component: <AuthenticatedLayout /> },
];

export {PublicRoute, AuthenticateRoute};