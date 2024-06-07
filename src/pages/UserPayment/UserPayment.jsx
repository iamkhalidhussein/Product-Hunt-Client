import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckOutForm/CheckoutForm';

//TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)
const UserPayment = () => {
    return (
        <div className='mt-12 '>
            <h2>Subscribe only for 50 USD (LifeTime)</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default UserPayment;