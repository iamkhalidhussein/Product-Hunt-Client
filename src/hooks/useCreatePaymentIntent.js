import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useCreatePaymentIntent = () => {
    const [clientSecret, setClientSecret] = useState('');

    const axiosSecure = useAxiosSecure();
    const totalPrice = 50;

    useEffect(() => {
        axiosSecure.post('/payments/create-payment-intent', { price: totalPrice })
        .then((res) => {
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
        // console.log(totalPrice)
    }, [axiosSecure, totalPrice]);
    
    return { clientSecret, totalPrice };
};

export default useCreatePaymentIntent;