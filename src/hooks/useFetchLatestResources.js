import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useFetchLatestResources = (page = 1, limit = 10) => {
    const axiosPublic = useAxiosPublic();

    const { 
        data, 
        refetch: refetchLatestResources, 
        isLoading: isLatestResourcesLoading, 
        isError 
    } = useQuery({
        queryKey: ['latestResources', page],
        queryFn: async () => {
            const res = await axiosPublic.get('/products/latest-resources', {
                params: { page, limit }
            });
            return res.data;
        },
    });

    return { 
        data, 
        refetchLatestResources, 
        isLatestResourcesLoading,
        isError
    };
};

export default useFetchLatestResources;