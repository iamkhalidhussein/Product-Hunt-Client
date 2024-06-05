import { useContext } from "react";
import { CgEditBlackPoint } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Upvotes = () => {
    const {user} = useContext(AuthContext);

    return (
            <div>
            <div className='flex mt-14 border items-start justify-between pl-5 pr-5 rounded-lg py-10 bg-white'>
                        <div className='flex gap-3 items-end'>
                            <img className='rounded-full w-[100px] h-[100px]' src={user.photoURL} alt="#" />
                            <div>
                                <h3 className='text-[#1B2530] text-xl font-medium hover:text-[#686EF8] cursor-pointer pb-2'>Md Khalid</h3>
                                <div className='flex items-center text-white bg-[#686EF8] justify-center rounded-3xl py-1 px-3'><CgEditBlackPoint className='text-xl mr-1'/><span className='mr-1'>0</span>Points</div>
                            </div>
                        </div>
                        <Link to="/dashboard/settings" className='flex items-center bg-[#686EF8] px-3 py-1 rounded-sm  text-[18px] text-white font-normal gap-1'><CiEdit className='text-2xl'/><span>Edit</span></Link>
                    </div>
                    <h2 className='text-[#1B2530] text-[36px] font-semibold pt-3'>Upvoted Resources</h2>
                    <div id="approved" className="">
                        <div className='flex justify-center border py-28 rounded-md mt-8 bg-white'>
                        <div><img className='mx-auto bg-[#686EF80D] rounded-full p-5' src="https://i.postimg.cc/7h42M6WJ/empty.png" alt="#" />
                        <h3 className='text-[#000000] text-2xl font-medium pt-7'>OOOPS! It's Empty</h3>
                        <p className='text-[#79808A] text-base font-normal'>There are no items to show</p></div>
                    </div>
                    </div>
                    
            </div>
    );
};

export default Upvotes;