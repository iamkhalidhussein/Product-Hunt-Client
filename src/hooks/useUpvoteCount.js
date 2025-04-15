import { useNavigate } from 'react-router-dom';
import useAxiosPublic from './useAxiosPublic';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';

const useUpvoteCount = ( product, handleRefetch ) => {
    const { user } = useContext(AuthContext);
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
    };
    
    return { 
        _id, 
        image, 
        title, 
        description, 
        upvote, 
        visit_site, 
        handleUpvoteCount 
    }
};

export default useUpvoteCount;