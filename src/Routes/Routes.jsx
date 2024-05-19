import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Shop from "../pages/Shop";
import PrivateRoute from "./PrivateRoutes";
import DetailsShoe from "../pages/DetailsShoe";
import Cart from "../pages/Cart";

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
          path: 'register',
          element: <Register/>
        }
        ,
        {
          path: 'shop',
          element: <Shop/>
        }
        ,
        {
          path: '/shoeDetails/:id',
          element:<PrivateRoute><DetailsShoe/></PrivateRoute>
        }
        ,
        {
          path: '/cart',
          element:<PrivateRoute><Cart/></PrivateRoute>
        }
      ]
    },

   
  ]);