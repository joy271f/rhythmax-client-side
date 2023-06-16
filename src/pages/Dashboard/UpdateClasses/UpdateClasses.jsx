import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";


const UpdateClasses = () => {
    const { user, logOut } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const loadData = useLoaderData();
    const {_id, className, photo, seats, price } = loadData;

    const onSubmit = data => {
        fetch(`http://localhost:5000/classes/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(classData => {
                if (classData.modifiedCount > 0) {
                    toast.success("Updated Class Successfully")
                }
            })
    }

    return (
        <div>
            <h1 className="text-4xl text-pink-600 text-center mt-12">Update Class</h1>
            <div className="hero-content my-12 flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-3/4 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body grid md:grid-cols-2 gap-10">
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("className", { required: true })}
                                    defaultValue={className}
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
                                    defaultValue={photo}
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
                                    defaultValue={seats}
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
                                    placeholder="$"
                                    {...register("price", { required: true })}
                                    defaultValue={price}
                                    className="input input-bordered border-pink-600"
                                />
                                {errors.price && <p className="text-amber-300">Price is required</p>}
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-pink-600 text-white" type="submit" value="Update Class" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateClasses;