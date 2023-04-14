import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Comment from "../views/comment/Comment";
import Customer from "../views/customer/Customer";
import Login from "../views/login/Login";
import Order from "../views/order/Order";
import Project from "../views/project/Project";
import Worker from "../views/worker/Worker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/project',
        element: <Project />
      },
      {
        path: '/customer',
        element: <Customer />
      },
      {
        path: '/worker',
        element: <Worker />
      },
      {
        path: '/order',
        element: <Order />
      },
      {
        path: '/comment',
        element: <Comment />
      }
    ],
  },
]);

export default router