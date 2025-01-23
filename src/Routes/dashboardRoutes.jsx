import { lazy, Suspense } from 'react';
import PrivateRoute from './PrivateRoute';
import DashboardErrorPage from '../components/DashboardErrorPage/DashboardErrorPage';
import DefaultLazySkeleton from '../components/Skeletons/DefaultLazySkeleton';

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

const dashboardRoutes = [
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
];

export default dashboardRoutes;