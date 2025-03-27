import LatestResources from "../LatestResources";
import { ProductCardSkeleton } from "../ProductCardSkeleton";
import ErrorFetchingData from "../errorFetchingData";
import PropTypes from 'prop-types';

export const FetchLatestResources = ({ 
    latestResources, 
    handleRefetch, 
    isLatestResourcesLoading, 
    lastItemRef,
    isError
}) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-14 pr-3">
            {latestResources.map((product, idx) => {
                const ref = idx === latestResources.length - 1 ? lastItemRef : undefined;
                return (
                    <LatestResources
                        key={product._id}
                        product={product}
                        handleRefetch={handleRefetch}
                        itemRef={ref}
                    />
                )
            })}
            {isLatestResourcesLoading && (
                Array.from({ length: 4 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
                ))
            )}
            {isError && <ErrorFetchingData message="Failed to load resources. Please try again" onRetry={handleRefetch}/>}
        </div>
    )
};

FetchLatestResources.propTypes = {
    latestResources: PropTypes.array,
    handleRefetch: PropTypes.func,
    isLatestResourcesLoading: PropTypes.bool,
    lastItemRef: PropTypes.any,
    isError: PropTypes.any
};