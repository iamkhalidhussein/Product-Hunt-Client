import { Outlet } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "./Sidebar.jsx";
import useDashboard from '../../hooks/useDashboard.js';


const Dashboard = () => {
    
    const { 
        activeRoute, 
        dashboardLogOut, 
        user, 
        isAdmin, 
        isModerator 
    } = useDashboard();

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
        </>
    );
};

export default Dashboard;