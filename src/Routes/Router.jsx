import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import MainLayout from "../Layout/MainLayout";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Cart from "../Pages/Dashboard/Cart/Cart";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Router;
