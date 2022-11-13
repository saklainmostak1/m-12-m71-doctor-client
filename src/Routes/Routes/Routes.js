import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import DashBoard from "../../Pages/DashBoard/Dashboard/DashBoard"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import SignUp from "../../Pages/Signup/SignUp"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
               element: <Login></Login>
            },
            {
                path: '/signup',
               element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
               element: <Appointment></Appointment>
            },
            
        ]
    },
    {
        path: '/dashboard',
       element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
    },
])