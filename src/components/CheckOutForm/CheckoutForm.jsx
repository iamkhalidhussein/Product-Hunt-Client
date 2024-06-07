import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const totalPrice = 50;

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then((res) => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
        console.log(totalPrice)
    }, [axiosSecure, totalPrice])

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axiosPublic.get(`/users/paymentinfo/${user.email}`)
            .then((res) => {
                console.log(res.data);
                if (!res.data.email) {
                    if (!stripe || !elements) {
                        return;
                    }
    
                    const card = elements.getElement(CardElement);
                    if (card === null) {
                        return;
                    }
    
                    stripe.createPaymentMethod({
                        type: 'card',
                        card
                    })
                    .then(({ error, paymentMethod }) => {
                        if (error) {
                            console.log('payment error', error);
                            setError(error.message);
                        } else {
                            console.log('payment method', paymentMethod);
                            setError('');
                        }
    
                        // confirm payment
                        stripe.confirmCardPayment(clientSecret, {
                            payment_method: {
                                card: card,
                                billing_details: {
                                    email: user?.email || 'anonymous',
                                    name: user?.displayName || 'anonymous'
                                }
                            }
                        })
                        .then(({ paymentIntent, error: confirmError }) => {
                            if (confirmError) {
                                console.log('confirm error');
                            } else {
                                console.log('payment intent', paymentIntent);
                                if (paymentIntent.status === 'succeeded') {
                                    console.log('transaction id', paymentIntent.id);
                                    setTransactionId(paymentIntent.id);
                    
                                    axiosPublic.post(`/users/payment/${user.email}`)
                                    .then((res) => {
                                        console.log(res.data);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                                }
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    })
                    .catch((error) => {
                        console.log('payment method creation error', error);
                    });
                } else {
                    console.log('user payment already have done');
                    return;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px', 
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        }
                    },
                    invalid: {
                        color: '#9e2146'
                    }
                }
            }}
            />

            <button className='btn btn-sm btn-primary my-3' type='submit' disabled={!stripe || !clientSecret}>Subscribe</button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600">Your Transaction Id:  {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;