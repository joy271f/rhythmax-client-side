import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import Error from "../pages/Error/Error";
import Classes from "../pages/Clases/Clases/Classes";
import AddClass from "../pages/Clases/AddClass/AddClass";

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
                path: 'classes',
                element: <Classes />
            },
            {
                path: 'addclass',
                element: <AddClass />
            },


            {
                path: '*',
                element: <Error />
            }
        ]
    },
]);