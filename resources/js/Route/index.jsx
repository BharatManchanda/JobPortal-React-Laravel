import Home from "../Pages/Public/Home"
import Login from "../Pages/Public/Auth/Login";

const PublicRoute = [
    { path:'/', component: <Home /> },
    { path:'/login', component: <Login /> }
];

export {PublicRoute};