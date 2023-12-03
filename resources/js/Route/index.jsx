import Home from "../Pages/Public/Home"
import Login from "../Pages/Public/Auth/Login";
import Register from "../Pages/Public/Auth/Register"

const PublicRoute = [
    { path:'/', component: <Home /> },
    { path:'/login', component: <Login /> },
    { path:'/register', component: <Register /> },
];

export {PublicRoute};