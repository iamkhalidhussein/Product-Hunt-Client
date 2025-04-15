import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useFetchUserSubmittedItems = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { 
        data: userProducts = [], 
        isLoading, 
        isError, 
        refetch 
    } = useQuery({
        queryKey: ["userProducts", user?.email],
        queryFn: async () => {
            if (!user?.email) return [];
            const response = await axiosSecure.get(`/products/getallsubmittedproducts/${user.email}`);
            return response.data;
        },
        enabled: !!user?.email,
    });

    return { userProducts, isLoading, isError, refetch };
};

export default useFetchUserSubmittedItems;