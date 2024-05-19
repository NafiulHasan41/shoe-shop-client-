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
import Dashboard from "../layouts/Dashboard";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/Dashboard/AdminHome";
import AddItem from "../pages/Dashboard/AddItem";
import MangeShoes from "../pages/Dashboard/MangeShoes";
import UpdateShoe from "../pages/Dashboard/UpdateShoe";
import AllUsers from "../pages/Dashboard/AllUsers";
import UserQuery from "../pages/Dashboard/UserQuery";
import UserHome from "../pages/Dashboard/Users/UserHome";
import Payment from "../pages/Dashboard/Users/Payment";
import OrderHistory from "../pages/Dashboard/Users/OrderHistory";


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
    
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // normal user routes
        {
          path: 'userHome',
          element: <UserHome/>
        },
        {
          path: 'cart',
          element:<Cart/>
        },
        {
          path: 'payment',
          element: <Payment/>
        },
        {
          path: 'orderHistory',
          element:<OrderHistory/>
        },
        // admin only routes
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },

        {
          path: 'addItems',
          element: <AdminRoute><AddItem/></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><MangeShoes/></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateShoe/></AdminRoute>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/shoesDelete/${params.id}`)
       
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers/></AdminRoute>
        },
        {
          path: 'usersQuery',
          element: <AdminRoute><UserQuery/></AdminRoute>,
          loader: () => fetch(`${import.meta.env.VITE_API_URL}/reviews`)
        }
      ]
    }

   
  ]);