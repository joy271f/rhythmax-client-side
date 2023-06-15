import { Link } from "react-router-dom";

const ShowClasses = ({ myClass, handleDelete }) => {
    const {_id, instructorName, instructorEmail, className, photo, seats, price} = myClass;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle text-white btn-sm bg-rose-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-xl w-24 h-24">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold"><p>{className}</p></div>
                        <div className="text-sm">Available seats: {seats}</div>
                    </div>
                </div>
            </td>
            <td>${price}</td>
            <td>
                {instructorName}
                <br />
                <span className="badge badge-ghost badge-sm">{instructorEmail}</span>
            </td>
            <th>
                <Link to={`/dashboard/updateclasses/${_id}`}><button className="btn btn-success btn-sm font-bold">Update</button></Link>
            </th>
        </tr>
    );
};

export default ShowClasses;