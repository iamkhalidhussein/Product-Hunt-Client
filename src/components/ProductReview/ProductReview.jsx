import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ProductReviewTable from "./ProductReviewTable";

const ProductReview = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: userProducts = [], isLoading, isError, refetch } = useQuery({
        queryKey: ["userProducts", user?.email],
        queryFn: async () => {
            if (!user?.email) return [];
            const response = await axiosSecure.get(`/products/getallsubmittedproducts/${user.email}`);
            return response.data;
        },
        enabled: !!user?.email,
    });

    // console.log(userProducts);

    if (isError) {
        return <div>Error fetching products. Please try again later.</div>;
    }

    return (
        <div className="mt-12">
            <ProductReviewTable products={userProducts} loading={isLoading} refetch={refetch}/>
        </div>
    );
};

export default ProductReview;