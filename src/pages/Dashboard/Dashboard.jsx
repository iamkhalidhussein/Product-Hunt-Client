import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useAdmin from "../../hooks/useAdmin.js";
import useModerator from "../../hooks/useModerator.js";
import Sidebar from "./Sidebar.jsx";


const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState(location.pathname);
    const isModerator = useModerator();
    const isAdmin = useAdmin();
    
    useEffect(() => {
        if(isAdmin[0]) {
            navigate('/dashboard/adminHome');
        } else if(isModerator[0]) {
            navigate('/dashboard/productReviewPage')
        } else {
            navigate('/dashboard/userProfile')
        }
    }, [])

    useEffect(() => {        
        setActiveRoute(location.pathname);
    }, [location])

    // console.log(activeRoute)
    // console.log(isAdmin[0], isModerator[0])

    const dashboardLogOut = () => {
        logOut()
        navigate('/');
    };

    return (
        <>
        <Navbar/>
            <div className="md:flex gap-12 bg-[#F5F8F9] dark:bg-black pb-10 pt-32 border-t-[1px]">
            <Sidebar
                activeRoute={activeRoute}
                isAdmin={isAdmin[0]}
                isModerator={isModerator[0]}
                dashboardLogOut={dashboardLogOut}
                user={user}
            />
            <div className='md:w-3/5 md:pr-10 md:px-0 px-4'>
                <Outlet/>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Dashboard;