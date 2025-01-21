import { CiBookmark } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import upvotee from '../../assets/upvote.png';
import useAxiosPublic from "../../hooks/useAxiosPublic.js";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const LatestResources = ({product, handleRefetch}) => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const {_id, image, title, description, upvote, visit_site} = product;
    // console.log(product);
    
    const handleUpvoteCount = (_id) => {
        if(!user) {
            return navigate('/login');
        }
        axiosPublic.patch(`/users/${user.email}/${_id}`)
        .then((res) => {
            // console.log(res.data);
            if (res.data.modifiedCount > 0) {
                handleRefetch()
            }
        })
        .catch(error => console.error('Error upvoting:', error));
    }

    return (
        <div className="flex justify-center">
            <div className='border rounded-lg'>
                            <div className='p-5 pl-6'><img className='w-96 h-56 border rounded-md' src={image} alt="#" /></div>
                            <div className='flex justify-between px-6'><p className='text-[#1B2530 text-xl font-medium hover:text-[#686EF8] duration-150 cursor-pointer'>{title}</p><CiBookmark data-tooltip-id="my-tooltip" data-tooltip-content="Bookmark" className='hover:text-[#6A6EF8] text-[26px] cursor-pointer text-[#79808A]'/>
                            <Tooltip id="my-tooltip" />
                            </div>
                            <p className='text-[#79808A] pt-4 pb-5 px-5 text-base inter font-medium'>{description}</p>
                            <hr />
                            <div className='flex justify-between py-5 px-5'>
                                <div onClick={() => handleUpvoteCount(_id)} className='flex gap-2 border pl-4 pr-6 h-11 cursor-pointer rounded-[5px] border-[#6A6EF8] items-center text-[#6A6EF8] text-base inter font-medium '><img className='' src={upvotee} alt="#" />Upvote<span>{upvote}</span></div>
                                <div className='flex items-center text-[#79808A] cursor-pointer text-base inter font-medium hover:text-[#6A6EF8] duration-200'><a href={visit_site}>Visit Site</a><MdArrowOutward /></div>
                            </div>
                    </div>
        </div>
    );
};

LatestResources.propTypes = {
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

export default LatestResources;