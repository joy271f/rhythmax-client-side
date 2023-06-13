import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <NavBar />
            <Outlet />
            <ToastContainer theme="colored"/>
        </div>
    );
};

export default Main;