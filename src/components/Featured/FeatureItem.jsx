import useAxiosPublic from "../../hooks/useAxiosPublic.js";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import upvotee from '../../assets/upvote.svg';
import ProductCard from "./ProductCard.jsx";

const FeatureItem = ({product, handleRefetch, lastItemRef}) => {
    // console.log(product);
    const {user} = useContext(AuthContext);
    const {_id, image, title, description, upvote, visit_site} = product;
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleUpvoteCount = (_id) => {
        if(!user) {
            return navigate('/login');
        }
        
        axiosPublic.patch(`/users/userrs/${user?.email}/${_id}`)
        .then((res) => {
            console.log(res.data, _id);
            if(res.data === true) {
                Swal.fire({
                    title: "Reminder",
                    text: "No Voting for Your Own Product",
                    icon: "warning"
                });
            }
            if (res.data.modifiedCount > 0) {
                handleRefetch();
            }
        })
        .catch(error => console.error('Error upvoting:', error));
    }

    const charLimit = 145;
    const truncatedDescription = description.length > charLimit
    ? description.substring(0, charLimit) + '...'
    : description;

    const charLimitTitle = 33;
    const truncatedTitle = title.length > charLimitTitle
    ? title.substring(0, charLimitTitle) + '...'
    : title;

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

    handleRefetch: PropTypes.func.isRequired, 
};

export default FeatureItem;
