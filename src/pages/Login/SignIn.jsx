import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import GoogleSignIn from "./GoogleSignIn";
import useLogin from "../../hooks/useLogin";

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const [LoginInfo, setLoginInfo] = useState({
        email: null,
        name: null,
        role: 'user',
        photoURL:null,
        insert: false,
    });
    useLogin(LoginInfo);

    const jwt = (result, insert = true) => {
        setLoginInfo({
            email: result.user.email,
            name: result.user.displayName,
            role: 'user',
            photoURL:result.user.photoURL,
            insert,
        }); setTimeout(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Sign In Success',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(from, { replace: true })
        }, 1000);

    }
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then((result) => {
                reset();
                jwt(result, false);
            })
    }

    return (
        <div className="hero">
            <div className="hero-content mt-8 flex-col lg:flex-row">
                <div className="text-center lg:text-left md:w-1/2">
                    <img src="/login.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    {...register("email", { required: true })}
                                    name="email"
                                    className="input input-bordered"
                                />
                                {errors.email && <span className="text-amber-300">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    placeholder="password"
                                    {...register("password", { required: true })}
                                    name="password"
                                    className="input input-bordered"
                                />
                                <small><p onClick={() => setPasswordVisible(!passwordVisible)}>
                                    {passwordVisible ? 'Hide Password' : 'Show Password'}
                                </p></small>
                                {errors.password?.type === 'required' && <p className="text-amber-300">Password is required</p>}
                            </div>
                            <p className="text-pink-600"></p>
                            <div className="form-control mt-6">
                                <input className="btn bg-pink-600 text-white" type="submit" value="Sign in" />
                            </div>
                            <div className="divider">OR</div>
                            <GoogleSignIn jwt={jwt} />
                            <span className='mx-auto'>Are You New Here? Please <Link to='/signup' className="text-pink-500">Sign Up</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;