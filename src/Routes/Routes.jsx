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
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Instrauctor from "../pages/Instructor/Instrauctor";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch("https://rhythmax-server-side.vercel.app/classes?limit=6&sort=true")
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
                path: '/instructors',
                element: <Instrauctor limit={0} />
            },
            {
                path: '/classes',
                element: <Classes />,
                loader: () => fetch("https://rhythmax-server-side.vercel.app/classes")
            },
            {
                path: '/classes/:id',
                element: <PrivateRoute><SingleClasses /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://rhythmax-server-side.vercel.app/classes/${params.id}`)
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardContent />
            },
            {
                path: '/dashboard/addclass',
                element: <AddClass />
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
                loader: ({ params }) => fetch(`https://rhythmax-server-side.vercel.app/classes/${params.id}`)
            },
            {
                path: '/dashboard/myselectedclass',
                element: <PrivateRoute><MySelectedClass /></PrivateRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER_URL}/bookings/${params.id}`)
            },
            {
                path: '/dashboard/paymenthistory',
                element: <PrivateRoute><PaymentHistory /></PrivateRoute>
            }
        ]
    }
]);