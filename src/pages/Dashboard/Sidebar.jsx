import { AiFillProduct, AiOutlineUser } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { RxPlus } from "react-icons/rx";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Sidebar = ({ activeRoute, isAdmin, isModerator, dashboardLogOut, user }) => {
    
    const sidebarLinks = [
        { path: '/dashboard/adminHome', icon: <FaHome />, label: 'Admin Home', visible: isAdmin },
        { path: '/dashboard/adminManageUser', icon: <FaUserGroup />, label: 'Manage Users', visible: isAdmin },
        { path: '/dashboard/productReviewPage', icon: <AiOutlineUser />, label: 'Product Review', visible: isModerator },
        { path: '/dashboard/reportedContentPage', icon: <PiBookmarkSimpleLight />, label: 'Reported Content', visible: isModerator },
        { path: '/dashboard/userProfile', icon: <AiOutlineUser />, label: 'Profile', visible: !isAdmin && !isModerator },
        { path: '/dashboard/addProductPage', icon: <RxPlus />, label: 'Add Product', visible: !isAdmin && !isModerator },
        { path: '/dashboard/userMyProducts', icon: <AiFillProduct />, label: 'My Products', visible: !isAdmin && !isModerator },
        { path: '/dashboard/userAccountSetting', icon: <IoSettingsOutline />, label: 'Settings', visible: !isAdmin && !isModerator },
    ];

    return (
        <div className='border md:z-0 md:sticky left-0 top-0 h-full overflow-y-auto bg-white dark:bg-gray-800 text-[#1B2430] mx-3 md:mx-0 md:ml-10 mt-14 text-[18px] rounded-lg py-7 pl-8 pr-8'>
            {sidebarLinks.map((link, index) => (
                link.visible && (
                    <Link
                        key={index}
                        to={link.path}
                        className={`flex gap-2 mb-1 cursor-pointer py-3 rounded-md pl-4 md:pr-56 items-center hover:bg-[#686EF8] hover:text-white duration ${
                            activeRoute === link.path ? 'bg-[#686EF8] text-white' : ''
                        }`}
                    >
                        
                        <span className="dark:text-white">{link.icon}</span>
                        <span className="dark:text-white">{link.label}</span>
                    </Link>
                )
            ))}
            <UserInfo user={user} dashboardLogOut={dashboardLogOut}/>
        </div>
    );
};

export default Sidebar;

Sidebar.propTypes = {
    activeRoute: PropTypes.string,
    isAdmin: PropTypes.bool,
    isModerator: PropTypes.bool,
    dashboardLogOut: PropTypes.func,
    user: PropTypes.object
};