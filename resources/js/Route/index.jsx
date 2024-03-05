import Home from "../Pages/Public/Home"
import Login from "../Pages/Public/Auth/Login"
import Register from "../Pages/Public/Auth/Register"
import Logout from "../Pages/Public/Auth/Logout";

import List from "../Pages/Admin/User/List";
import Dashboard from "../Pages/Admin/Dashboard";
import CreateOrEdit from "../Pages/Admin/User/CreateOrEdit";
import Chat from "../Pages/Admin/User/Chat";

import JobCreateOrEdit from "../Pages/Admin/Job/CreateOrEdit";
import JobList from "../Pages/Admin/Job/List";
import Job from "../Pages/Public/Job";

const PublicRoute = [
    { path:'/', component: <Home /> },
    { path:'/jobs', component: <Job /> },
    { path:'/login', component: <Login /> },
    { path:'/logout', component: <Logout /> },
    { path:'/register', component: <Register /> },
];

const AdminRoute = [
    { path:'/admin/dashboard', component: <Dashboard /> },

    { path:'/admin/user', component: <List /> },
    { path:'/admin/user/create', component: <CreateOrEdit /> },
    { path:'/admin/user/:id/edit', component: <CreateOrEdit /> },
    { path:'/admin/user/:id/chat', component: <Chat /> },

    { path:'/admin/job', component: <JobList /> },
    { path:'/admin/job/create', component: <JobCreateOrEdit /> },
    { path:'/admin/job/:id/edit', component: <JobCreateOrEdit /> },
];

export {PublicRoute, AdminRoute};