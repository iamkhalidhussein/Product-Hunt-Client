import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useFetchUserProducts = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: userProducts = [], refetch, isLoading} = useQuery({
        queryKey: ['userProducts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products/getSubmittedProduct/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email
    });

    return [userProducts, refetch, isLoading];
};

export default useFetchUserProducts;