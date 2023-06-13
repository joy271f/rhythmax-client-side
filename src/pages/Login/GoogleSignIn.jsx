import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                if (user) {
                    toast.success("Google Login Successful")
                    setError(null)
                    navigate(from, { replace: true })
                }
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    return (
        <div className="flex gap-4 mx-auto">
            <button onClick={handleGoogleSignIn}><FaGoogle className="text-2xl text-pink-600" /></button>
            <p className="text-pink-600">{error}</p>
        </div>
    );
};

export default GoogleSignIn;