import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ classInfo }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const { price, userEmail, userName } = classInfo;

    useEffect(() => {
        if (price) {
            // Create PaymentIntent as soon as the page loads
            fetch(import.meta.env.VITE_SERVER_URL + "/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ price: price }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail
                    },
                },
            },
        );

        if (confirmError) {
            setProcessing(false);
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // store payment info in the database
            const payment = {
                price: price,
                transactionId: paymentIntent.id,
                email: userEmail,
                orderId: classInfo._id,
            }
            fetch(import.meta.env.VITE_SERVER_URL + '/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setSuccess('Congrats! your payment completed');
                    setTransactionId(paymentIntent.id);
                })
        }
        setProcessing(false);


    }

    return (
        <>
            {classInfo?.paid != "Paid" && !success ? <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className="btn bg-sky-600 text-white mt-4"
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form> :
                <p className="text-red-600 ">Already Paid</p>
            }
            <p className="text-red-600">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-700'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                    <Link to="/dashboard">Go to dashboard</Link>
                </div>
            }
        </>
    );
};

export default CheckoutForm;