import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Main;