import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

import publicRoutes from './publicRoutes';
import paymentRoutes from './paymentRoutes';
import dashboardRoutes from './dashboardRoutes';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      ...publicRoutes,
      ...paymentRoutes, 
      ...dashboardRoutes
    ]
  }
]);