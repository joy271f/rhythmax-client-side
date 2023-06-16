import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {
    const { getRole } = useContext(AuthContext);
    return (
        <>
            <NavBar></NavBar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-pink-100">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn bg-pink-600 drawer-button lg:hidden">Open Dashboard</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 h-full border-r-2 bg-purple-100">
                        <li><Link to='/dashboard' className="text-lg text-purple-800 bg-purple-300 mb-2">Dashboard</Link></li>
                        {(getRole() == 'admin' || getRole() == 'instructor') && <><li><Link to='/dashboard/addclass' className="text-lg text-purple-800 bg-purple-300 mb-2">Add Class</Link></li>
                            <li><Link to='/dashboard/manageclass' className="text-lg text-purple-800 bg-purple-300 mb-2">My Classes</Link></li></>}
                        {getRole() == 'admin' && <li><Link to='/dashboard/manageuser' className="text-lg text-purple-800 bg-purple-300 mb-2">Manage Users</Link></li>}
                        {(getRole() == 'user') && <li><Link to='/dashboard/myselectedclass' className="text-lg text-purple-800 bg-purple-300 mb-2">My Selected Class</Link></li>}{(getRole() == 'admin' || getRole() == 'user') &&
                            <li><Link to='/dashboard/paymenthistory' className="text-lg text-purple-800 bg-purple-300 mb-2">Payment History</Link></li>}
                    </ul>

                </div>
            </div >
            <Footer></Footer>
        </>
    );
};

export default Dashboard;