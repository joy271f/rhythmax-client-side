import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const ShowUser = ({ userInfo, handleDelete }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, email, role } = userInfo;
    return (
        <tr>
            <th>
                <label>
                    {user.email != email &&
                        <button onClick={() => handleDelete(_id)} className="btn btn-circle text-white btn-sm bg-rose-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    }
                </label>
            </th>
            <td>
                <h1>{name}</h1>
            </td>
            <td>
                <h1>{email}</h1>
            </td>
            <td>
                <h1>{role}</h1>
            </td>
        </tr>
    );
};

export default ShowUser;