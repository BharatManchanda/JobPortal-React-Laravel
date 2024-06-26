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
import Companies from "../Pages/Public/Companies";
import Services from "../Pages/Public/Services";
import Recuriters from "../Pages/Public/Recuriters";

import CategoryCreateOrEdit from "../Pages/Admin/Category/CreateOrEdit";
import CategoryList from "../Pages/Admin/Category/List";

const PublicRoute = [
    { path:'/', component: <Home /> },
    { path:'/jobs', component: <Job /> },
    { path:'/companies', component: <Companies /> },
    { path:'/services', component: <Services /> },
    { path:'/recuriters', component: <Recuriters /> },

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
    
    { path:'/admin/category/', component: <CategoryList /> },
    { path:'/admin/category/create', component: <CategoryCreateOrEdit /> },
    { path:'/admin/category/:id/edit', component: <CategoryCreateOrEdit /> },
];

const RecuriterRoute = [
    // { path:'/recruiter/dashboard', component: <Dashboard /> },
];

export {PublicRoute, AdminRoute, RecuriterRoute};