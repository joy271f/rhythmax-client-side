import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const ShowUser = ({ userInfo, handleDelete, makeInstructor }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, email, role } = userInfo;
    return (
        <tr>
            <td>
                <h1>{name}</h1>
            </td>
            <td>
                <h1>{email}</h1>
            </td>
            <td>
                <h1>{role}</h1>
            </td>
            <td>
                {role != "admin" && role != "instructor" &&
                    <button onClick={() => makeInstructor(_id)} className="btn text-white btn-sm bg-pink-700">
                        Make Instructor
                    </button>
                }
                {user.email != email &&
                    <button onClick={() => handleDelete(_id)} className="btn ml-2 text-white btn-sm bg-pink-700">
                        Delete
                    </button>
                }
            </td>
        </tr>
    );
};

export default ShowUser;