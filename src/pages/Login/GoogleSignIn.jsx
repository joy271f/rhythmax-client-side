import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const GoogleSignIn = ({ jwt }) => {
    const { googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                jwt(result);
                setError(null)
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