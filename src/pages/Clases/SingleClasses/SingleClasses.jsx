import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const SingleClasses = () => {
    const { user } = useContext(AuthContext)
    const params = useParams()
    const navigate = useNavigate()
    const [course, setCourse] = useState([])
    const { _id, photo, className, price, instructorName } = course;

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/classes/${params.id}?email=${user?.email}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                setCourse(data)
            })
    }, [user])

    const handleBooking = () => {
        const bookings = { classID: _id, userName: user?.displayName, userEmail: user?.email, photo, className, price }
        fetch('https://rhythmax-server-side.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Selected Class',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate("/dashboard/myselectedclass", { replace: true })
                }
            })
    }


    return (
        <div className="font-serif mb-36">
            <h1 className="text-4xl text-center text-pink-600 mt-8 font-bold">Class Details</h1>
            <div className="grid md:grid-cols-2 gap-6 max-w-[80vw] mx-auto mt-12" style={parseInt(course.seats) - parseInt(course.enrolled) < 1 ? { backgroundColor: "red" } : {}}>
                <div>
                    <img src={photo} className="w-3/4 mx-auto h-96 rounded-xl" alt="" />
                </div>
                <div className="mt-24 text-2xl">
                    <h1 className="mt-2 font-bold">{className}</h1>
                    <p className="mt-1"><small><span className="font-bold">Instructor :</span> {instructorName}</small></p>
                    <h1 className="mt-2"><span className="font-bold">Available Seats:</span> {parseInt(course.seats) - parseInt(course.enrolled)}</h1>
                    <h1 className="mt-2"><span className="font-bold">Regular Price:</span> ${price}</h1>
                    <button disabled={(!course.isBooked && course.instructorEmail != user?.email && (parseInt(course.seats) - parseInt(course.enrolled)) > 0) ? false : true} onClick={handleBooking} className="btn bg-pink-600 mt-8 text-white">Select</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClasses;