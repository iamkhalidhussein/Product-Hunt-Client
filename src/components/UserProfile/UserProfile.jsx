import { useContext, useEffect, useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic.js";
import PropTypes from "prop-types";
import { Skeleton } from '@/components/ui/skeleton';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [isSubscribe, setIsSubscribe] = useState(false);

    useEffect(() => {
        const fetchPaymentInfo = async () => {
            try {
                const email = user?.email || user?.providerData[0]?.email;
                if (!email) {
                    console.warn("No email found for the user.");
                    setIsSubscribe(false);
                    return;
                }
    
                const res = await axiosPublic.get(`/users/paymentinfo/${email}`);
                setIsSubscribe(!!res.data.email);
            } catch (error) {
                console.error("Failed to fetch payment info:", error);
                setIsSubscribe(false);
            }
        };
        fetchPaymentInfo();
    }, [axiosPublic, user?.email, user?.providerData]);

    return (
        <>
            <div className='md:flex mt-14 border items-start justify-between pl-5 pr-5 rounded-lg py-10 bg-white dark:bg-gray-700'>
                <UserInfo user={user}/>
                <SubscribeButton isSubscribe={isSubscribe}/>
            </div>
        </>
    );
};

export default UserProfile;

const UserInfo = ({ user }) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    const manageImgLoading = () => {
        setImgLoaded(true);
    };

    return (
    <div className="md:flex gap-3 items-end">
      {!imgLoaded && <Skeleton className="w-24 h-24 rounded-full"/>}
        <img
            className={`rounded-full w-[100px] h-[100px] ${!imgLoaded && 'hidden'}`}
            src={user?.photoURL}
            alt="User Avatar"
            onLoad={manageImgLoading}
        />
      <div>
        <h3 className="text-[#1B2530] dark:text-white text-xl font-medium hover:text-[#686EF8] cursor-pointer pb-2">
          {user?.displayName}
        </h3>
        <div className="flex items-center text-white bg-[#686EF8] justify-center rounded-3xl py-1 px-3">
          <MdOutlineMarkEmailUnread className="text-xl mr-1" />
          <span className="mr-1">Email:</span>
          {user?.email || user?.providerData[0]?.email}
        </div>
      </div>
    </div>
    )
};

const SubscribeButton = ({ isSubscribe }) => {
    return isSubscribe ? (
        <button className="flex items-center md:mt-0 mt-3 bg-[#686EF8] px-3 py-1 rounded-sm text-[18px] text-white font-normal gap-1">
            <CiEdit className="text-2xl" />
            <span>Subscribed</span>
        </button>
    ) : (
        <Link
            to="/dashboard/userPayment"
            className="flex items-center bg-[#686EF8] px-3 py-1 rounded-sm text-[18px] text-white font-normal gap-1"
        >
        <CiEdit className="text-2xl" />
        <span>Subscribe</span>
        </Link>
    );
};

UserInfo.propTypes = {
    user: PropTypes.object,
};

SubscribeButton.propTypes = {
    isSubscribe: PropTypes.bool,
}
