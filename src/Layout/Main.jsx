import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavBar />
            <div className="max-w-screen-xl mx-auto">
                <Outlet />
            </div>
            <Footer />
            <ToastContainer theme="colored" />
        </div>
    );
};

export default Main;