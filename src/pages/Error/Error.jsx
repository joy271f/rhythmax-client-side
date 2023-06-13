import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className='text-center text-rose-600 mt-6'>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div>
                Sorry, an error has occured, Requested page not found!
            </div>
            <Link to="/" className='btn btn-error my-8'>Back to Home</Link>
        </div>
    );
};

export default Error;