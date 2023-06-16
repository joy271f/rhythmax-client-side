import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import Error from "../pages/Error/Error";
import Classes from "../pages/Clases/Clases/Classes";
import DashboardContent from "../pages/Dashboard/DashboardContent";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import SingleClasses from "../pages/Clases/SingleClasses/SingleClasses";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../Routes/PrivateRoute";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import UpdateClasses from "../pages/Dashboard/UpdateClasses/UpdateClasses";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/classes',
                element: <Classes />,
                loader: () => fetch("http://localhost:5000/classes")
            },
            {
                path: '/classes/:id',
                element: <PrivateRoute><SingleClasses /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardContent />
            },
            {
                path: '/dashboard/addclass',
                element: <PrivateRoute><AddClass /></PrivateRoute>
            },
            {
                path: '/dashboard/manageclass',
                element: <PrivateRoute><ManageClass /></PrivateRoute>
            },
            {
                path: '/dashboard/manageuser',
                element: <PrivateRoute><ManageUser /></PrivateRoute>,
            },
            {
                path: '/dashboard/updateclasses/:id',
                element: <PrivateRoute><UpdateClasses /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
            },
            {
                path: '/dashboard/myselectedclass',
                element: <PrivateRoute><MySelectedClass /></PrivateRoute>
            },
            {
                path: '/dashboard/paymenthistory',
                element: <PrivateRoute><Payment /></PrivateRoute>
            }
        ]
    }
]);