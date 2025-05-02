import { useContext, useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '../providers/AuthProvider';

const useFetchPaymentInfo = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [isSubscribe, setIsSubscribe] = useState(false);

    useEffect(() => {
        const fetchPaymentInfo = async () => {
            try {
                const email = user?.email || user?.providerData[0]?.email;
                if (!email) {
                    console.warn("No email found for the user.");
                    setIsSubscribe(false);
                    return;
                }
    
                const res = await axiosPublic.get(`/users/paymentinfo/${email}`);
                setIsSubscribe(!!res.data.email);
            } catch (error) {
                console.error("Failed to fetch payment info:", error);
                setIsSubscribe(false);
            }
        };
        fetchPaymentInfo();
    }, [axiosPublic, user?.email, user?.providerData]);

    return { isSubscribe, user }
};

export default useFetchPaymentInfo;