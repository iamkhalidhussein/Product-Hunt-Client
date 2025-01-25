import { RiLogoutBoxRLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const UserInfo = ({ user, dashboardLogOut }) => {
    const [imgLoad, setImgLoad] = useState(false);

    const manageImgLoading = () => {
        setImgLoad(true);
    };

    return (
        <div className='flex rounded-md bg-[#F5F8F9] dark:bg-gray-600 mt-10 p-3 gap-2'>
            {!imgLoad && <Skeleton className="h-[60px] w-[60px]"/>}
            <img 
                className={`w-[60px] h-[60px] rounded-full ${!imgLoad && 'hidden'}`} 
                src={user.photoURL} 
                alt="#"
                onLoad={manageImgLoading}
            />
            <div>
                <h3 className='text-[#1B2530] dark:text-white text-xl font-medium'>{user.displayName}</h3>
                <div onClick={dashboardLogOut} className='flex items-center text-[#79808A] dark:text-white gap-1 cursor-pointer hover:text-[#686EF8]'>
                    <RiLogoutBoxRLine />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;

UserInfo.propTypes = {
    user: PropTypes.object,
    dashboardLogOut: PropTypes.func
};