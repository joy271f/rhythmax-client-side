import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }


    return (
        <div>
            <div className="hero-content my-12 flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-3/4 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body grid md:grid-cols-2 gap-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("instructorName", { required: true })}
                                    value={user?.displayName}
                                    readOnly
                                    className="input input-bordered border-pink-600"
                                />
                                {errors.instructorName && <span className="text-amber-300">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor email</span>
                                </label>
                                <input
                                    type='email'
                                    {...register("instructorEmail", { required: true })}
                                    value={user?.email}
                                    readOnly
                                    className="input input-bordered border-pink-600"
                                />
                                {errors.instructorEmail && <p className="text-amber-300">email is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("className", { required: true })}
                                    className="input input-bordered border-pink-600"
                                />
                                {errors.className && <span className="text-amber-300">Class Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input
                                    type='text'
                                    {...register("photo", { required: true })}
                                    className="input input-bordered border-pink-600"
                                />
                                {errors.photo && <p className="text-amber-300">PhotoURL is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available seats</span>
                                </label>
                                <input
                                    type='number'
                                    {...register("seats", { required: true })}
                                    className="input input-bordered border-pink-600"
                                />
                                {errors.seats && <p className="text-amber-300">Available seats is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type='number'
                                    {...register("price", { required: true })}
                                    className="input input-bordered border-pink-600"
                                />
                                {errors.price && <p className="text-amber-300">Price is required</p>}
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-pink-600 text-white" type="submit" value="Add Class" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;