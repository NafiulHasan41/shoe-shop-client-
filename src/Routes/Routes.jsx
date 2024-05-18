import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage/>  ,
      children: [
        {
            index: true,
            element: <Home></Home>
        }, 
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Register/>
        }
      ]
    },

   
  ]);