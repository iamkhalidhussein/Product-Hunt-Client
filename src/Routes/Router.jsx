import {
    createBrowserRouter,
    } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Dashboard from '../pages/Dashboard/Dashboard';
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardErrorPage from '../components/DashboardErrorPage/DashboardErrorPage';
import Profile from '../components/Profile/Profile';
import Bookmarks from '../components/Bookmarks/Bookmarks';
import Upvotes from '../components/Upvotes/Upvotes';
import Submissions from '../components/Submissions/Sumissions';
import Settings from '../components/Settings/Settings';
import ManageUsers from "../components/ManageUsers/ManageUsers";


export const router = createBrowserRouter([
        {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
        },
        {
            path: '/dashboard',
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            errorElement: <DashboardErrorPage></DashboardErrorPage>,
            children: [
                {
                    path: 'profile',
                    element: <Profile></Profile>
                },
                {
                    path: 'bookmarks',
                    element: <Bookmarks></Bookmarks>
                },
                {
                    path: 'upvotes',
                    element: <Upvotes></Upvotes>
                },
                {
                    path: 'submissions',
                    element: <Submissions></Submissions>
                },
                {
                    path: 'settings',
                    element: <Settings></Settings>
                },
                {
                    path: 'adminManageUser',
                    element: <ManageUsers></ManageUsers>
                }
            ]
        },
    ]);