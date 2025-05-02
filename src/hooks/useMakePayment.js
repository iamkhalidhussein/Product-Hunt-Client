import { loadStripe } from "@stripe/stripe-js";
import useAxiosSecure from "./useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK)

const useMakePayment = (setLoading, userEmail) => {
    const axiosSecure = useAxiosSecure();

    const doSubscribe = async () => {
        const email = { email: userEmail };

        try {
            setLoading(true);
            const response = axiosSecure.post('/payments/create-payment', {email});
            if(!response.data) {
                const error = await response;
                console.error('Error creating checkout session', error);
            }
            
            const { data } = await response;
            
            const stripe = await stripePromise;
            const result = await stripe.redirectToCheckout({
                sessionId: data?.id
            });
            
            console.log('payment_result', result);
            if(result.error) {
                console.log(result.error.message);
            }
            
        } catch (error) {
            console.error('error during subsribe..', error);
        } finally {
            setLoading(false);
        }
    };

    return doSubscribe;
};

export default useMakePayment;