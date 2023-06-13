import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import GoogleSignIn from "./GoogleSignIn";

const SignIn = () => {
    // TODO : Reset
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(() => {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign In Success',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
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
                                    type="password"
                                    placeholder="password"
                                    {...register("password", { required: true })}
                                    name="password"
                                    className="input input-bordered"
                                />
                                {errors.password?.type === 'required' && <p className="text-amber-300">Password is required</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className="text-pink-600"></p>
                            <div className="form-control mt-6">
                                <input className="btn bg-pink-600 text-white" type="submit" value="Sign in" />
                            </div>
                            <div className="divider">OR</div>
                            <GoogleSignIn />
                            <span className='mx-auto'>Are You New Here? Please <Link to='/signup' className="text-pink-500">Sign Up</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;