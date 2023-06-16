import { useContext, useEffect, useState } from 'react';
import MySelectedClassTable from './MySelectedClassTable';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';

const MySelectedClass = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([])

    useEffect(() => {
        fetch(`https://rhythmax-server-side.vercel.app/bookings?email=${user?.email}`, {
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
            .then(data => setMyClasses(data))
    }, [user])

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://rhythmax-server-side.vercel.app/bookings/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myClasses.filter(cls => cls._id !== item._id);
                            setMyClasses(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div>
            <div className='uppercase font-semibold flex justify-evenly items-center h-[60px]'>
                <h3 className='text-3xl'>My Selected Classes:</h3>
            </div>
            <div className="overflow-x-auto">
                {myClasses && myClasses.length > 0 ? <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            myClasses.map((item, index) => <MySelectedClassTable
                                key={item._id}
                                item={item}
                                index={index}
                                handleDelete={handleDelete}
                            >

                            </MySelectedClassTable>)
                        }

                    </tbody>
                </table> : <p className='text-center mt-24'>No data found.</p>}
            </div>
        </div>
    );
};

export default MySelectedClass;