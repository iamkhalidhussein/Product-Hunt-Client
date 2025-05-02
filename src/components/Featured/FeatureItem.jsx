import PropTypes from 'prop-types';
import upvotee from '../../assets/upvote.svg';
import ProductCard from "./ProductCard.jsx";
import useUpvoteCount from "../../hooks/useUpvoteCount.js";
import useCharacterLimit from '../../hooks/useCharacterLimit.js';

const FeatureItem = ({ product, handleRefetch, lastItemRef }) => {

    const { 
        _id, 
        image, 
        upvote, 
        visit_site,
        title, 
        description, 
        handleUpvoteCount 
    } = useUpvoteCount( product, handleRefetch );

    const { truncatedDescription, truncatedTitle } = useCharacterLimit( title, description );

    return (
        <>
            <ProductCard
                itemRef={lastItemRef}
                _id={_id}
                truncatedDescription={truncatedDescription}
                handleUpvoteCount={handleUpvoteCount}
                image={image}
                title={truncatedTitle}
                upvote={upvote}
                upvotee={upvotee}
                visit_site={visit_site}
            />
        </>
    );
};


FeatureItem.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        upvote: PropTypes.number,
        visit_site: PropTypes.string.isRequired,
    }).isRequired, 
    lastItemRef: PropTypes.any,
    handleRefetch: PropTypes.func.isRequired, 
};

export default FeatureItem;
