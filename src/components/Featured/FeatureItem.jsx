import { MdArrowOutward } from "react-icons/md";
import upvotee from '../../assets/upvote.png';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const FeatureItem = ({product, handleRefetch}) => {
    // console.log(product);
    const {user} = useContext(AuthContext);
    const {_id, image, title, description, upvote, visit_site} = product;
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleUpvoteCount = (_id) => {
        if(!user) {
            return navigate('/login');
        }
        
        axiosPublic.patch(`/userrs/${user.email}/${_id}`)
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
    return (
        <div className="flex justify-center">
            <div className='border rounded-lg mr-3'>
                <div className='p-5 pl-6'>
                    <img className='w-96 h-56 border rounded-md' src={image} alt="#" />
                </div>
                <div className='flex gap-0 justify-between px-7'>
                    <p className='text-[#1B2530 text-xl font-medium hover:text-[#686EF8] duration-150 cursor-pointer'>{title}</p>
                    <span className='text-white bg-[#686EF8] px-3 rounded-sm py-[2px]'>Promoted</span>
                </div>
                <p className='text-[#79808A] pt-4 pb-5 px-5 text-base inter font-medium'>{description}</p>
                <hr />
                <div className='flex gap-0 justify-between py-5 px-5'>
                    <div onClick={() => handleUpvoteCount(_id)} className='flex gap-2 border px-4 py-2 cursor-pointer rounded-[5px] border-[#6A6EF8] items-center text-[#6A6EF8] text-base inter font-medium '>
                        <img className='' src={upvotee} alt="#" />
                        Upvote<span>{upvote}</span>
                    </div>
                    <div className='flex items-center text-[#79808A] cursor-pointer text-base inter font-medium hover:text-[#6A6EF8] duration-200'>
                        <a href={visit_site}>Visit Site</a><MdArrowOutward />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureItem;
