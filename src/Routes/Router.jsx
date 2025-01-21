import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardErrorPage from '../components/DashboardErrorPage/DashboardErrorPage';
import PaymentSuccess from '../components/UserPaymentSuccess/PaymentSuccess';
import PaymentFailed from '../components/UserPaymentFailed/PaymentFailed';
import PaymentCancel from '../components/UserPaymentCancel/PaymentCancel';
import DefaultLazySkeleton from '../components/Skeletons/DefaultLazySkeleton';

// Lazy load components
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Profile = lazy(() => import('../components/Profile/Profile'));
const Bookmarks = lazy(() => import('../components/Bookmarks/Bookmarks'));
const Upvotes = lazy(() => import('../components/Upvotes/Upvotes'));
const Submissions = lazy(() => import('../components/Submissions/Submissions'));
const Settings = lazy(() => import('../components/Settings/Settings'));
const ManageUsers = lazy(() => import("../components/ManageUsers/ManageUsers"));
const AdminHome = lazy(() => import('../components/AdminHome/AdminHome'));
const UserProfile = lazy(() => import('../components/UserProfile/UserProfile'));
const UserPayment = lazy(() => import('../pages/UserPayment/UserPayment'));
const AddProductPage = lazy(() => import('../components/AddProductPage/AddProductPage'));
const MyProducts = lazy(() => import('../components/UserMyProducts/MyProducts'));
const UserAccountSetting = lazy(() => import("../components/UserAccountSetting/UserAccountSetting"));
const ProductReview = lazy(() => import('../components/ProductReview/ProductReview'));
const ReportedContent = lazy(() => import('../components/ReportedContent/ReportedContent'));

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
      // SSL Commerz payment-related routes
      {
        path: 'payment/success',
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: 'payment/failed',
        element: <PaymentFailed></PaymentFailed>
      },
      {
        path: 'payment/cancel',
        element: <PaymentCancel></PaymentCancel>
      }
    ]
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Loading Dashboard...</div>}>
          <Dashboard />
        </Suspense>
      </PrivateRoute>
    ),
    errorElement: <DashboardErrorPage></DashboardErrorPage>,
    children: [
      {
        path: 'profile',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <Profile />
          </Suspense>
        )
      },
      {
        path: 'userProfile',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <UserProfile />
          </Suspense>
        )
      },
      {
        path: 'addProductPage',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <AddProductPage />
          </Suspense>
        )
      },
      {
        path: 'userMyProducts',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <MyProducts />
          </Suspense>
        )
      },
      {
        path: 'userPayment',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <UserPayment />
          </Suspense>
        )
      },
      {
        path: 'userAccountSetting',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <UserAccountSetting />
          </Suspense>
        )
      },
      {
        path: 'productReviewPage',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <ProductReview />
          </Suspense>
        )
      },
      {
        path: 'reportedContentPage',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <ReportedContent />
          </Suspense>
        )
      },
      {
        path: 'bookmarks',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <Bookmarks />
          </Suspense>
        )
      },
      {
        path: 'upvotes',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <Upvotes />
          </Suspense>
        )
      },
      {
        path: 'submissions',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <Submissions />
          </Suspense>
        )
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <Settings />
          </Suspense>
        )
      },
      {
        path: 'adminManageUser',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <ManageUsers />
          </Suspense>
        )
      },
      {
        path: 'adminHome',
        element: (
          <Suspense fallback={<DefaultLazySkeleton/>}>
            <AdminHome />
          </Suspense>
        )
      }
    ]
  }
]);