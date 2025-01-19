import { useContext, useEffect, useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic.js";

const UserProfile = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [isSubscribe, setIsSubscribe] = useState(false);

    useEffect(() => {
    axiosPublic.get(`/users/paymentinfo/${user.email}`)
    .then((res) => {
        console.log(res.data)
        if(res.data.email) {
            setIsSubscribe(true)
        }
        else {
            setIsSubscribe(false)
        }
    })
    .catch((error) => {
        console.log(error);
    })
    }, [])

    // const isSubscribe = false;
    return (
        <div>
            <div>
            <div className='md:flex mt-14 border items-start justify-between pl-5 pr-5 rounded-lg py-10 bg-white dark:bg-gray-700'>
                        <div className='md:flex gap-3 items-end'>
                            <img className='rounded-full w-[100px] h-[100px]' src={user.photoURL} alt="#" />
                            <div>
                                <h3 className='text-[#1B2530] dark:text-white text-xl font-medium hover:text-[#686EF8] cursor-pointer pb-2'>{user.displayName}</h3>
                                <div className='flex items-center text-white bg-[#686EF8] justify-center rounded-3xl py-1 px-3'><MdOutlineMarkEmailUnread className='text-xl mr-1'/><span className='mr-1'>Email:</span>{user.email}</div>
                            </div>
                        </div>
                        { isSubscribe ? 
                            <button className='flex items-center md:mt-0 mt-3 bg-[#686EF8] px-3 py-1 rounded-sm  text-[18px] text-white font-normal gap-1'><CiEdit className='text-2xl'/><span>Subscribed</span></button> :
                            <Link to="/dashboard/userPayment" className='flex items-center bg-[#686EF8] px-3 py-1 rounded-sm  text-[18px] text-white font-normal gap-1'><CiEdit className='text-2xl'/><span>Subscribe</span></Link>
                        }
                    </div>
            </div>
        </div>
    );
};

export default UserProfile;