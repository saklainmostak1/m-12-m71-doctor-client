import { createBrowserRouter } from "react-router-dom"
import DashBoardLayout from "../../Layout/DashBoardLayout"
import Main from "../../Layout/Main"
import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import MyAppointment from "../../Pages/DashBoard/MyAppointment/MyAppointment"
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
       element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
       children: [
        {
            path: '/dashboard',
            element: <MyAppointment></MyAppointment>
        }
       ]
    },
])