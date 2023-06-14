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
                element: <SingleClasses />,
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
                element: <AddClass />
            }
        ]
    }
]);