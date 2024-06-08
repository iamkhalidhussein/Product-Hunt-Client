import { AiOutlineUser } from "react-icons/ai";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { IoTriangleOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RxPlus } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaHome } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import useAdmin from "../../hooks/useAdmin";
import useModerator from "../../hooks/useModerator";
import { AiFillProduct } from "react-icons/ai";



const Dashboard = () => {
    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState('/dashboard/profile');
    const [activeRoute2, setActiveRoute2] = useState('/dashboard/adminHome');

    //TODO: get isAdmin value from the DB
    const isAdmin = useAdmin();
    const isModerator = useModerator();
    console.log(isAdmin[0], isModerator[0])
    
    useEffect(() => {
        if(isAdmin[0]) {
            navigate('/dashboard/adminHome');
        }
        if(isModerator[0]) {
            navigate('/dashboard/profile')
        }

        if(!isModerator[0] && !isAdmin[0]) {
            navigate('/dashboard/userProfile')
        }
        if(isModerator[0] && isAdmin[0]) {
            navigate('/dashboard/adminHome')
        }
    }, [])

    useEffect(() => {        
        setActiveRoute(location.pathname);
        setActiveRoute2(location.pathname);
    }, [location])

    console.log(activeRoute)
    console.log(activeRoute2)
    console.log(isAdmin[0], isModerator[0])

    const dashboardLogOut = () => {
        logOut()
        navigate('/');
    }
    return (
        <>
        <Navbar></Navbar>
            <div className="flex gap-12 bg-[#F5F8F9] pt-32 border-t-[1px]">
            <div className='border z-0 sticky left-0 top-0 h-full  overflow-y-auto bg-white text-[#1B2430] ml-10 mt-14 text-[18px] rounded-lg py-7 pl-8 pr-8'>
                {
                    isAdmin[0] && <>
                        <Link to="/dashboard/adminHome" className={`flex gap-2 mb-3 cursor-pointer py-3 rounded-md pl-4 pr-56 items-center hover:bg-[#686EF8] hover:text-white duration ${activeRoute2 === '/dashboard/adminHome' ? 'bg-[#686EF8] text-white' : null}`}><FaHome /><span>Admin Home</span></Link>
                        <Link to="/dashboard/adminManageUser" className={`flex gap-2 mb-1 cursor-pointer py-3 rounded-md pl-4 pr-56 items-center hover:bg-[#686EF8] hover:text-white duration ${activeRoute2 === '/dashboard/adminManageUser' ? 'bg-[#686EF8] text-white' : null}`}><FaUserGroup /><span>Manage Users</span></Link>
                        <div className={`flex rounded-md bg-[#F5F8F9] mt-10 p-3 gap-2 ${isAdmin[0] && isModerator[0] ? 'hidden' : null}`}>
                        <img className='w-[60px] h-[60px] rounded-full' src={user.photoURL} alt="#" />
                        <div>
                            <h3 className='text-[#1B2530] text-xl font-medium'>{user.displayName}</h3>
                            <div onClick={dashboardLogOut} className='flex items-center text-[#79808A] gap-1 cursor-pointer hover:text-[#686EF8]'><RiLogoutBoxRLine /><span>Logout</span></div>
                        </div>
                    </div>
                    </>
                }
                { isModerator[0] &&
                    <>
                    <Link to="/dashboard/profile" className={`flex gap-2 mb-1 cursor-pointer py-3 rounded-md pl-4 pr-56 items-center hover:bg-[#686EF8] hover:text-white duration ${activeRoute === '/dashboard/profile' ? 'bg-[#686EF8] text-white' : null}`}><AiOutlineUser className='text-xl'/><span>Profile</span></Link>
                    <Link to="/dashboard/bookmarks" className={`flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-56 items-center ${activeRoute === '/dashboard/bookmarks' ? 'bg-[#686EF8] text-white' : null}`}><PiBookmarkSimpleLight className='text-xl'/><span>Bookmarks</span></Link>
                    <Link to="/dashboard/upvotes" className={`flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-56 items-center ${activeRoute === '/dashboard/upvotes' ? 'bg-[#686EF8] text-white' : null}`}><IoTriangleOutline className='text-xl'/><span>Upvotes</span></Link>
                    <Link to="/dashboard/submissions" className={`flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-56 items-center ${activeRoute === '/dashboard/submissions' ? 'bg-[#686EF8] text-white' : null}`}><RxPlus className='text-xl'/><span>Submissions</span></Link>
                    <Link to="/dashboard/settings" className={`flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-56 items-center ${activeRoute === '/dashboard/settings' ? 'bg-[#686EF8] text-white' : null}`}><IoSettingsOutline className='text-xl'/><span>Settings</span></Link>
                    <div className='flex rounded-md bg-[#F5F8F9] mt-10 p-3 gap-2'>
                        <img className='w-[60px] h-[60px] rounded-full' src={user.photoURL} alt="#" />
                        <div>
                            <h3 className='text-[#1B2530] text-xl font-medium'>{user.displayName}</h3>
                            <div onClick={dashboardLogOut} className='flex items-center text-[#79808A] gap-1 cursor-pointer hover:text-[#686EF8]'><RiLogoutBoxRLine /><span>Logout</span></div>
                        </div>
                    </div>
                </>
                }

                {
                    !isAdmin[0] && !isModerator[0] ? <>
                    <Link to="/dashboard/userProfile" className={`flex gap-2 mb-1 cursor-pointer py-3 rounded-md pl-4 pr-56 items-center hover:bg-[#686EF8] hover:text-white duration ${activeRoute === '/dashboard/userProfile' ? 'bg-[#686EF8] text-white' : null}`}><AiOutlineUser className='text-xl'/><span>Profile</span></Link>
                    <Link to="/dashboard/addProductPage" className={`flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-56 items-center ${activeRoute === '/dashboard/addProductPage' ? 'bg-[#686EF8] text-white' : null}`}><RxPlus className='text-xl'/><span>Add Product</span></Link>
                    <Link to="/dashboard/userMyProducts" className={`flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-56 items-center ${activeRoute === '/dashboard/userMyProducts' ? 'bg-[#686EF8] text-white' : null}`}><AiFillProduct className='text-xl'/><span>My Products</span></Link>
                    <Link to="/dashboard/userAccountSetting" className={`flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-56 items-center ${activeRoute === '/dashboard/userAccountSetting' ? 'bg-[#686EF8] text-white' : null}`}><IoSettingsOutline className='text-xl'/><span>Settings</span></Link>
                    <div className='flex rounded-md bg-[#F5F8F9] mt-10 p-3 gap-2'>
                        <img className='w-[60px] h-[60px] rounded-full' src={user.photoURL} alt="#" />
                        <div>
                            <h3 className='text-[#1B2530] text-xl font-medium'>{user.displayName}</h3>
                            <div onClick={dashboardLogOut} className='flex items-center text-[#79808A] gap-1 cursor-pointer hover:text-[#686EF8]'><RiLogoutBoxRLine /><span>Logout</span></div>
                        </div>
                    </div>
                </> : null
                }

            </div>

            <div className='w-3/5 pr-10'>
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Dashboard;