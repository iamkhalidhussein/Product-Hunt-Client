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
import Approved from '../components/Approved/Approved';
import UnderReview from '../components/UnderReview/UnderReview';
import Rejected from '../components/Rejected/Rejected';
import DashboardErrorPage from '../components/DashboardErrorPage/DashboardErrorPage';

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
                    path: 'approved',
                    element: <Approved></Approved>
                },
                {
                    path: 'underReview',
                    element: <UnderReview></UnderReview>
                },
                {
                    path: 'rejected',
                    element: <Rejected></Rejected>
                }
            ]
        },
    ]);