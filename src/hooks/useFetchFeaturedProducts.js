import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export const useFetchFeaturedProducts = (page1 = 1, limit1 = 10) => {
    const axiosPublic = useAxiosPublic();

    const {
        data: data1,
        refetch: refetchFeaturedProducts,
        isLoading: isFeaturedProductsLoading,
        isError: isError1
    } = useQuery({
        queryKey: ['featuredProducts', page1],
        queryFn: async () => {
            const res = await axiosPublic.get('/products/featured-products', {
                params: { page1, limit1 }
            });
            return res.data;
        }
    });

    return {
        data1,
        refetchFeaturedProducts, 
        isFeaturedProductsLoading,
        isError1
    };
};