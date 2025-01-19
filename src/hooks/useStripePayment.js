import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";

const useStripePayment = (stripe ,setError, setTransactionId, elements, CardElement, clientSecret, totalPrice, setLoading) => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
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
                                    
                                    const payment = {
                                        email: user.email,
                                        price: totalPrice,
                                        transactionId: paymentIntent.id,
                                        date: new Date(),
                                    }

                                    axiosSecure.post('/payments/stripe', payment)
                                    .then((res) => {
                                        if(res.data?.paymentResult?.insertedId) {
                                            Swal.fire({
                                                icon: 'success', 
                                                title: 'Thank you for your payment',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                        }
                                        setLoading(false);
                                    })
                                    .catch((error) => {
                                        setLoading(false);
                                        console.log(error);
                                    })
                                    navigate('/dashboard/userProfile')
                                }
                            }
                        })
                        .catch((error) => {
                            setLoading(false);
                            console.log(error);
                        });
                    })
                    .catch((error) => {
                    setLoading(false);
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
    return handleSubmit;
};

export default useStripePayment;