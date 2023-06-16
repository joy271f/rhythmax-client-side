import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import ShowClasses from "./ShowClasses";
import { toast } from "react-toastify";

const ManageClass = () => {

    const { user, logOut, getRole } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/classes?email=${getRole() == 'admin' ? '' : user?.email}`)
            .then(res => res.json())
            .then(data => setMyClasses(data))
    }, [])


    const handleDelete = id => {
        const process = confirm('Are You Sure to Delete?')
        if (process) {
            fetch(`http://localhost:5000/classes/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return logOut();
                    }
                    return res.json();
                })
                .then(data => {
                    if (data.deletedCount) {
                        toast.success("Class Deleted")
                        const remaining = myClasses.filter(myClass => myClass._id !== id);
                        setMyClasses(remaining)
                    }
                })
        }
    }


    return (
        <div className='max-w-[95vw] mx-auto'>
            <div>
                <h1 className='text-center text-purple-600 mt-8 text-4xl font-bold'>My Classes</h1>
                <div className="overflow-x-auto w-full mx-auto mt-12">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Class Details</th>
                                <th>Price</th>
                                <th>Instructor Details</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses.map(myClass => <ShowClasses
                                    key={myClass._id}
                                    myClass={myClass}
                                    handleDelete={handleDelete}
                                ></ShowClasses>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;