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
import AdminHome from '../components/AdminHome/AdminHome';
import UserProfile from '../components/UserProfile/UserProfile';
import UserPayment from '../pages/UserPayment/UserPayment';
import AddProductPage from '../components/AddProductPage/AddProductPage';
import MyProducts from '../components/UserMyProducts/MyProducts'
import UserAccountSetting from "../components/UserAccountSetting/UserAccountSetting";
import ProductReview from '../components/ProductReview/ProductReview';
import ReportedContent from '../components/ReportedContent/ReportedContent';
import PaymentSuccess from '../components/UserPaymentSuccess/PaymentSuccess';
import PaymentFailed from '../components/UserPaymentFailed/PaymentFailed';
import PaymentCancel from '../components/UserPaymentCancel/PaymentCancel';


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
            //ssl commerz payment related routes and components
            {   
                path: 'success',
                element: <PaymentSuccess></PaymentSuccess>
            },
            {   
                path: 'failed',
                element: <PaymentFailed></PaymentFailed>
            },
            {   
                path: 'cancel',
                element: <PaymentCancel></PaymentCancel>
            }
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
                    path: 'userProfile',
                    element: <UserProfile></UserProfile>
                },
                {
                    path: 'addProductPage',
                    element: <AddProductPage></AddProductPage>
                },
                {
                    path: 'userMyProducts',
                    element: <MyProducts></MyProducts>
                },
                {
                    path: 'userPayment',
                    element: <UserPayment></UserPayment>
                },
                {
                    path: 'userAccountSetting',
                    element: <UserAccountSetting></UserAccountSetting>
                },
                {
                    path: 'productReviewPage',
                    element: <ProductReview></ProductReview>
                },
                {
                    path: 'reportedContentPage',
                    element: <ReportedContent></ReportedContent>
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
                },
                {
                    path: 'adminHome',
                    element: <AdminHome></AdminHome>
                },
            ]
        },
    ]);