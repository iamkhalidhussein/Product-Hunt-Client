import PropTypes from 'prop-types';

const CategoryItem = ({ icon, label }) => {
    return (
        <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white dark:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'>
            <img src={icon} alt='#' className='dark:bg-white'/>
            <span>{label}</span>
        </div>
    );
};

export default CategoryItem;

CategoryItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string
};