import PropTypes from 'prop-types';

const LatestResourcesHeader = ({ handleShowAll }) => {
    return (
        <div className='md:flex hidden items-center justify-between pr-3 pt-10'>
            <div>
                <h1 className="text-[#1B2530] text-[36px] font-medium">Latest Resources</h1>
                <p className="text-[#70808A] inter text-base font-medium pb-7">Trending, popular and featured resources, loved by the users most</p>
            </div>
            <button 
                onClick={handleShowAll} 
                className='bg-[#686EF8] text-white text-base font-medium py-3 px-6 rounded-md cursor-pointer'
            >
                View All
            </button>
        </div>
    );
};

export default LatestResourcesHeader;

LatestResourcesHeader.propTypes = {
    handleShowAll: PropTypes.func
};