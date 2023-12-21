import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home/Home";
import Login from "../actions/Login";
import Register from "../actions/Register";
import MyTask from "../page/MyTask/MyTask";
import PrivateRoute from "../Provider/PrivateRoute";
import Dashboard from "../page/Dashboard/Dashboard";
import UserProfile from "../page/Dashboard/UserProfile/UserDashboad";
import AddTask from "../page/Dashboard/AddTask/AddTask";
import Error from "../page/ErrorPage/Error";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<Error/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/task",
          element:<PrivateRoute><MyTask/></PrivateRoute>
        }
      ]

    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement:<Error/>,
      children: [

        {
          path:"/dashboard/userboard",
          element:<UserProfile/>
        },
        {
          path:"/dashboard/addtask",
          element:<AddTask/>
        }
        

       
        

      ]
    }
  ]);