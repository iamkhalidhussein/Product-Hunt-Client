import FeatureItem from "../FeatureItem"
import { ProductCardSkeleton } from "../ProductCardSkeleton"
import PropTypes from 'prop-types';
import ErrorFetchingData from "../errorFetchingData";

export const FetchFeaturedProducts = ({ 
    showAll, 
    featuredProducts, 
    handleRefetch,
    lastItemRef,
    isError,
    isFeaturedProductsLoading
}) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 pt-12 gap-5">
            {!featuredProducts || featuredProducts.length === 0 ? (                
                Array.from({ length: showAll ? 6 : 2 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))
            ) : (
                showAll
                ? featuredProducts.map((product, index) => (
                    <FeatureItem
                        lastItemRef={index === featuredProducts.length - 1 ? lastItemRef : null}
                        key={`${product._id}-${index}`} // Ensure unique key
                        product={product}
                        handleRefetch={handleRefetch}
                    />
                    ))
                : featuredProducts.slice(0, 2).map((product, index) => (
                    <FeatureItem
                        key={`${product._id}-${index}`} // Ensure unique key
                        product={product}
                        handleRefetch={handleRefetch}
                    />
                ))
            )}
            {isFeaturedProductsLoading && Array.from({ length: 6 }).map((_, index) => (
                <ProductCardSkeleton key={index}/>
            ))}
            {isError && <ErrorFetchingData message="Failed to load resources. Please try again" onRetry={handleRefetch}/>}
        </div>
    )
};

FetchFeaturedProducts.propTypes = {
    showAll: PropTypes.bool,
    featuredProducts: PropTypes.array,
    handleRefetch: PropTypes.func,
    lastItemRef: PropTypes.any,
    isError: PropTypes.any,
    isFeaturedProductsLoading: PropTypes.bool
};