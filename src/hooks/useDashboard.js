import { useContext, useEffect, useState } from "react";
import useAdmin from "./useAdmin";
import useModerator from "./useModerator";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const useDashboard = () => {
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

    return { 
        user, 
        activeRoute, 
        dashboardLogOut, 
        isAdmin, 
        isModerator 
    };
};

export default useDashboard;