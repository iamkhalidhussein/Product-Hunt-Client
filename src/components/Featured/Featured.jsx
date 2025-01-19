import * as assets from './assets.js';
import 'react-tooltip/dist/react-tooltip.css'
import { useState } from 'react';
import FeatureItem from './FeatureItem';
import LatestResources from './LatestResources';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic.js';
import CategoryItem from './CategoryItem.jsx';
import categories from './categories/categories.json';
import PropTypes from 'prop-types';

const Featured = () => {
    const [showAll, setShowAll] = useState(false);
    const axiosPublic = useAxiosPublic();
    
    const {data: featuredProducts = [], refetch: refetchFeaturedProducts} = useQuery({
        queryKey: ['userrs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products/featured-products', {
            });
            return res.data;
        }
    }); 
    // console.log(featuredProducts)

    
    const {data: latestResources = [], refetch: refetchLatestResources} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products/latest-resources', {
            });
            return res.data;
        }
    });
    // console.log(latestResources)
    
    const handleRefetch = () => {
        refetchFeaturedProducts();
        refetchLatestResources();
    }

    const handleShowAll = () => {
        setShowAll(true)
    }

    const renderLatestItems = () => {
        if(!showAll) {    
            return (
                <>
                    <LatestResourcesHeader handleShowAll={handleShowAll}/>
                    <hr />
                    <FetchLatestResources 
                        latestResources={latestResources}
                        handleRefetch={handleRefetch}
                    />
                </>
            )
        }
    };

    const renderFeaturedItems = () => {
        if(showAll) {
            return (
                <FetchFeaturedProducts 
                    showAll={showAll}
                    featuredProducts={featuredProducts}
                    handleRefetch={handleRefetch}
                />
            ) 
        } 
        if(!showAll) {
            return (
                <FetchFeaturedProducts 
                showAll={showAll}
                featuredProducts={featuredProducts}
                handleRefetch={handleRefetch}
            />
            )
        }
    };

    // console.log('isshowall', showAll)
    return (
        <div className="md:flex gap-12 bg-[#F5F8F9] dark:bg-black pt-5 pb-10 border-t-[1px]">
            <div className='border md:z-0 md:sticky left-0 top-0 h-screen md:w-[650px] overflow-y-auto bg-white dark:bg-black text-[#1B2430] ml-10 mt-14 text-[18px] rounded-lg py-7 pl-10 pr-8'>
                <h3 className="text-[#1B2430] dark:text-white text-2xl pb-7 font-medium">Categories</h3>
                {categories.map((category, index) => (
                    <CategoryItem key={index} icon={assets[category.icon]} label={category.label}/>
                ))}
            </div>
            <div className='mt-14 w-full'>
                { !showAll 
                ? <FeaturedResourceHeader1/>
                : <FeaturedResourceHeader2/>
                }
                <hr className='mr-8'/>                
                {renderFeaturedItems()}
                {renderLatestItems()}
            </div>
        </div>
    );
};

export default Featured;


const FeaturedResourceHeader1 = () => {
    return (
        <>
            <h1 className="text-[#1B2530] dark:text-white md:px-0 px-1 text-[36px] font-medium">Featured Resources and Products</h1>
            <p className="text-[#70808A] md:px-0 px-1 inter text-base font-medium pb-7">Trending, popular and featured resources, loved by the users most</p>
        </>
    )
};

const FeaturedResourceHeader2 = () => {
    return (
        <>
            <h1 className="text-[#1B2530] dark:text-white text-[36px] font-medium leading-10 pb-3">Free Tools, Products and Resources for <br /> Developers and Designers</h1>
            <p className="text-[#70808A] dark:text-white inter text-base font-medium pb-7">You&apos;re exploring all available resources and products from all categories. Massive collection of the latest web development tools, design resources, and more. If you would like to sort them by category choose resource type from sidebar also you can sort by popular upvotes from right side. If you find something interesting feel free to submit and upvote resources you like most. All the resources handpicked for developers and designers to improve workflow.</p>
        </>
    )
};

const FetchFeaturedProducts = ({showAll, featuredProducts, handleRefetch}) => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 pt-12 gap-5'>
            {showAll 
            ? featuredProducts.map(product => <FeatureItem key={product._id} product={product} handleRefetch={handleRefetch}></FeatureItem>)
            : featuredProducts.slice(0, 2).map(product => <FeatureItem key={product._id} product={product} handleRefetch={handleRefetch}></FeatureItem>)
            }
        </div>
    )
}

const FetchLatestResources = ({ latestResources, handleRefetch }) => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 pt-14 pr-3'>
            {
                latestResources.map(product => <LatestResources key={product._id} product={product} handleRefetch={handleRefetch}></LatestResources>)
            }
        </div>
    )
};

const LatestResourcesHeader = ({ handleShowAll }) => {
    return (
        <div className='md:flex hidden items-center justify-between pr-3 pt-10'>
            <div><h1 className="text-[#1B2530] text-[36px] font-medium">Latest Resources</h1>
            <p className="text-[#70808A] inter text-base font-medium pb-7">Trending, popular and featured resources, loved by the users most</p></div>
            <button onClick={handleShowAll} className='bg-[#686EF8] text-white text-base font-medium py-3 px-6 rounded-md cursor-pointer'>View All</button>
        </div>
    )
};

FetchFeaturedProducts.propTypes = {
    showAll: PropTypes.bool,
    featuredProducts: PropTypes.array,
    handleRefetch: PropTypes.func
};

LatestResourcesHeader.propTypes = {
    handleShowAll: PropTypes.func
};

FetchLatestResources.propTypes = {
    latestResources: PropTypes.array,
    handleRefetch: PropTypes.func
};