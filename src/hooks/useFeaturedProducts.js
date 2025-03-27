import { useEffect, useState } from "react";
import { useInfiniteScroll } from "./useInfiniteScroll";
import { useFetchFeaturedProducts } from "./useFetchFeaturedProducts";

const useFeaturedProducts = () => {
    const [page1, setPage1] = useState(1);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const limit1 = 10;

    const {
        data1,
        refetchFeaturedProducts,
        isFeaturedProductsLoading,
        isError1
    } = useFetchFeaturedProducts(page1, limit1);

    const { lastItemRef: lastItemRef1 } = useInfiniteScroll(
        refetchFeaturedProducts,
        isFeaturedProductsLoading,
        data1?.pagination?.hasNextPage,
        setPage1
    );

    useEffect(() => {
        if(data1?.data) {
            setFeaturedProducts((prevFeaturedProducts) => [...prevFeaturedProducts, ...data1.data]);
        }
    }, [data1]);

    return { featuredProducts, lastItemRef1, isError1, refetchFeaturedProducts, data1, isFeaturedProductsLoading };
};

export default useFeaturedProducts;