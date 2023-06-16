import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
    const { user, getRole } = useContext(AuthContext);
    const [myPaymentHistory, setMyPaymentHistory] = useState([])

    useEffect(() => {
        fetch(`https://rhythmax-server-side.vercel.app/bookings?getPaid=true&email=${getRole() == 'admin' ? '' : user?.email}`)
            .then(res => res.json())
            .then(data => setMyPaymentHistory(data))
    }, [])


    return (
        <div>
            <div className='uppercase font-semibold flex justify-evenly items-center h-[60px]'>
                <h3 className='text-3xl'>Payment History:</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Transaction ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPaymentHistory.map(pd =>
                                <tr key={pd._id}>
                                    <td><Link to={`/classes/${pd.classID}`}><h2 className="card-title text-sm">{pd.className}</h2></Link></td>
                                    <td>{pd.price}</td>
                                    <td>{pd.transactionId}</td>
                                    <td>{pd.paid}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;