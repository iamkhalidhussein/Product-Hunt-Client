import ProductReviewTable from "./ProductReviewTable";
import useFetchUserSubmittedItems from "../../hooks/useFetchUserSubmittedItems";

const ProductReview = () => {
    const { 
        userProducts, 
        isError, 
        isLoading, 
        refetch 
    } = useFetchUserSubmittedItems();

    if (isError) {
        return <div>Error fetching products. Please try again later.</div>;
    }

    return (
        <div className="mt-12">
            <ProductReviewTable 
                products={userProducts} 
                loading={isLoading} 
                refetch={refetch}
            />
        </div>
    );
};

export default ProductReview;