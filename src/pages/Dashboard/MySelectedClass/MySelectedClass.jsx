import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MySelectedClassTable from './MySelectedClassTable';
import Swal from 'sweetalert2';

const MySelectedClass = () => {
    const myClassesData = useLoaderData()
    const [myClasses, setMyClasses] = useState(myClassesData)

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
                fetch(`http://localhost:5000/bookings/${item._id}`, {
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
                <h3 className='text-3xl'>My Selected Classes: {myClasses.length}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className='text-center'>Class</th>
                            <th className='text-center'>Class Name</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Action</th>
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
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;