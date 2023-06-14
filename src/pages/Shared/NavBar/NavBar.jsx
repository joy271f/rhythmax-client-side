import { Link, NavLink } from "react-router-dom";
import './NavBar.css'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
    }

    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/instructors'>Instructors</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>
        {
            user ?
                <>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                </> : ''
        }
    </>


    return (
        <div className="navbar p-12 h-24 sticky top-0 bg-white text-pink-600 z-10">
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact bg-base-100 dropdown-content mt-3 p-2 rounded-box w-52 font-bold">
                        {navItems}
                    </ul>
                </div>
                <Link className="normal-case text-xl">
                    <img src="/logo.png" alt="" className='md:w-60 md:ml-4 w-48' />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 mx-8">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end ms-auto md:mr-4">

                {user?.email ?
                    <>
                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                            <img src={user.photoURL} alt="" className="w-10 mr-4 rounded-full h-10" />
                        </div>
                        <button onClick={handleLogout} className="btn bg-pink-600 text-white">Sign Out</button>
                    </>
                    :
                    <>
                        <Link to='/signin' className="md:mr-4 mr-4 text-pink-600">Sign in</Link>
                        <Link to='/signup'><button className="btn bg-pink-600 text-white">Sign up</button></Link>
                    </>
                }
            </div>
        </div >
    );
};

export default NavBar;