import 'react-tooltip/dist/react-tooltip.css'
import { useState } from 'react';
import CategoryItem from './CategoryItem.jsx';
import categories from './categories/categories.json';
import PropTypes from 'prop-types';
import { FeaturedResourceHeader1 } from './featured-components/FeaturedResourceHeader1.jsx';
import { FeaturedResourceHeader2 } from './featured-components/FeaturedResourceHeader2.jsx';
import LatestResourcesHeader from './featured-components/LatestResourcesHeader.jsx';
import { FetchLatestResources } from './featured-components/FetchLatestResources.jsx';
import { FetchFeaturedProducts } from './featured-components/FetchFeaturedProducts.jsx';
import useFeaturedProducts from '../../hooks/useFeaturedProducts.js';
import useLatestResources from '../../hooks/useLatestResources.js';

const Featured = () => {
    const [showAll, setShowAll] = useState(false);
    
    const { 
        featuredProducts, 
        refetchFeaturedProducts, 
        lastItemRef1, 
        isError1, 
        data1, 
        isFeaturedProductsLoading 
    } = useFeaturedProducts();
    
    const { 
        data, 
        latestResources, 
        isLatestResourcesLoading, 
        lastItemRef, 
        isError, 
        refetchLatestResources 
    } = useLatestResources();

    const handleRefetch = () => {
        refetchFeaturedProducts();
        refetchLatestResources();
    };

    const handleShowAll = () => {
        setShowAll(true);
    };

    console.log('data1', data1, lastItemRef1);
    console.log('data', data, lastItemRef);

    const renderLatestItems = () => {
        if(!showAll) {    
            return (
                <>
                    <LatestResourcesHeader handleShowAll={handleShowAll}/>
                    <hr />
                    <FetchLatestResources 
                        latestResources={latestResources}
                        handleRefetch={handleRefetch}
                        isLatestResourcesLoading={isLatestResourcesLoading}
                        lastItemRef={lastItemRef}
                        isError={isError}
                    />
                </>
            )
        }
    };

    const renderFeaturedResourceHeader = () => {
        if(!showAll) {
            return <FeaturedResourceHeader1/>;
        } else {
            return <FeaturedResourceHeader2/>; 
        }
    };

    // console.log('isshowall', showAll)
    return (
        <div className="md:flex gap-12 bg-[#F5F8F9] dark:bg-black pt-5 pb-10 border-t-[1px]">
            <div className='border md:z-0 md:sticky left-0 top-0 h-screen md:w-[650px] overflow-y-auto bg-white dark:bg-black text-[#1B2430] ml-10 mt-14 text-[18px] rounded-lg py-7 pl-10 pr-8'>
                <h3 className="text-[#1B2430] dark:text-white text-2xl pb-7 font-medium">Categories</h3>
                {categories.map((category, index) => (
                    <CategoryItem key={index} icon={category?.icon} label={category?.label}/>
                ))}
            </div>
            <div className='mt-14 w-full'>
                {renderFeaturedResourceHeader()}
                <hr className='mr-8'/>                
                <FetchFeaturedProducts 
                    showAll={showAll}
                    featuredProducts={featuredProducts}
                    handleRefetch={handleRefetch}
                    isError={isError1}
                    isFeaturedProductsLoading={isFeaturedProductsLoading}
                    lastItemRef={lastItemRef1}
                />
                {renderLatestItems()}
            </div>
        </div>
    );
};

export default Featured;

FetchFeaturedProducts.propTypes = {
    showAll: PropTypes.bool,
    featuredProducts: PropTypes.array,
    handleRefetch: PropTypes.func
};
