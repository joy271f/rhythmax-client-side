import { useLoaderData } from "react-router-dom";

const SingleClasses = () => {
    const loadData = useLoaderData();
    const { photo, className, seats, price, instructorName } = loadData;
    return (
        <div className="font-serif mb-36">
            <h1 className="text-4xl text-center text-pink-600 mt-8 font-bold">Class Details</h1>
            <div className="grid md:grid-cols-2 gap-6 max-w-[80vw] mx-auto mt-12">
                <div>
                    <img src={photo} className="w-3/4 mx-auto h-96 rounded-xl" alt="" />
                </div>
                <div className="mt-24 text-2xl">
                    <h1 className="mt-2"><span className="font-bold">Course Name:</span> {className}</h1>
                    <p className="mt-1"><small><span className="font-bold">Instructor Name:</span> {instructorName}</small></p>
                    <h1 className="mt-2"><span className="font-bold">Available Seats:</span> {seats}</h1>
                    <h1 className="mt-2"><span className="font-bold">Regular Price:</span> ${price}</h1>
                </div>
            </div>
        </div>
    );
};

export default SingleClasses;