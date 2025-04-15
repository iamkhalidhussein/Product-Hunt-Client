import { useContext, useEffect } from 'react';
import { UNSAFE_DataRouterStateContext } from 'react-router-dom';
import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '../providers/AuthProvider';

const useFetchPaymentInfo = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [isSubscribe, setIsSubscribe] = UNSAFE_DataRouterStateContext(false);

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