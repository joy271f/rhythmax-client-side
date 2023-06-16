import ShowUser from "./ShowUser";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";

const ManageUser = () => {
    const { logOut } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users", {
            method: 'GET',
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
            .then(data => setUsers(data))
    }, [])

    const handleDelete = id => {
        const process = confirm('Are You Sure to Delete?')
        if (process) {
            fetch(`http://localhost:5000/users/${id}`, {
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
                        toast.success("User Deleted")
                        const remaining = users.filter(myUser => myUser._id !== id);
                        setUsers(remaining)
                    }
                })
        }
    }
    const makeInstructor = (id, role) => {
        const process = confirm('Are You Sure?')
        if (process) {
            fetch(`http://localhost:5000/makeinstructor/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ role: role })
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return logOut();
                    }
                    return res.json();
                })
                .then(() => {
                    const current = users.find(myUser => myUser._id == id);
                    current.role = role
                    const remaining = users.filter(myUser => myUser._id !== id);
                    setUsers([current, ...remaining])
                    toast.success("Make Instructor Successfully")
                })
        }
    }




    return (
        <div className='max-w-[95vw] mx-auto'>
            <div>
                <h1 className='text-center text-purple-600 mt-8 text-4xl font-bold'>My Users</h1>
                <div className="overflow-x-auto w-full mx-auto mt-12">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>User Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <ShowUser
                                    key={user._id}
                                    userInfo={user}
                                    handleDelete={handleDelete}
                                    makeInstructor={makeInstructor}
                                ></ShowUser>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;