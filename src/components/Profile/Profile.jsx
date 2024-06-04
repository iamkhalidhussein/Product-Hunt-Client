import { useContext } from "react";
import { CgEditBlackPoint } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div>
            <div className='flex mt-14 border items-start justify-between pl-5 pr-5 rounded-lg py-10 bg-white'>
                        <div className='flex gap-3 items-end'>
                            <img className='rounded-full w-[100px] h-[100px]' src={user.photoURL} alt="#" />
                            <div>
                                <h3 className='text-[#1B2530] text-xl font-medium hover:text-[#686EF8] cursor-pointer pb-2'>Md Khalid</h3>
                                <div className='flex items-center text-white bg-[#686EF8] justify-center rounded-3xl py-1 px-3'><CgEditBlackPoint className='text-xl mr-1'/><span className='mr-1'>0</span>Points</div>
                            </div>
                        </div>
                        <div className='flex items-center bg-[#686EF8] px-3 py-1 rounded-sm  text-[18px] text-white font-normal gap-1'><CiEdit className='text-2xl'/><span>Edit</span></div>
                    </div>
                    <h2 className='text-[#1B2530] text-[36px] font-medium py-9'>Your Submission</h2>
                    <div className='border flex justify-start gap-3 p-4 rounded bg-white'>
                        <Link to="/profile/approved"><button className='bg-[#686EF8] py-2.5 px-6 text-white rounded'>Approved</button></Link>
                        <Link to="/dashboard/underReview"><button className='bg-[#2C3743] px-5 py-2.5 rounded text-white'>Under Review</button></Link>
                        <Link to="/dashboard/rejected"><button className='bg-[#2C3743] px-5 py-2.5 text-white rounded'>Rejected</button></Link>
                    </div>
            </div>
            <div className="w-20px">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Profile;