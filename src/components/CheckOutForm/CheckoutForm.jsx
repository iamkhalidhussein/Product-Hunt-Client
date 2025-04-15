import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useStripePayment from "../../hooks/useStripePayment";
import useCreatePaymentIntent from "../../hooks/useCreatePaymentIntent";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    
    const { clientSecret, totalPrice } = useCreatePaymentIntent();

    const handleSubmit = useStripePayment(
        stripe, 
        setError, 
        setTransactionId, 
        elements, 
        CardElement, 
        clientSecret, 
        totalPrice, 
        setLoading
    );

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

            <button 
                className='btn btn-sm btn-primary py-1 px-4 rounded my-3 bg-[#686EF8]' 
                type='submit' 
                disabled={!stripe || !clientSecret}>{loading ? 'Subscribing...' : 'Subscribe'}
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600">Your Transaction Id:  {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;