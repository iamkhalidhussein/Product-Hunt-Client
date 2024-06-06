import { useContext } from "react";
import { CgEditBlackPoint } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);


    const approved = () => {
        const approved = document.getElementById('approved');
        approved.classList.remove('hidden');
        const underReview = document.getElementById('underReview');
        underReview.classList.add('hidden');
        const rejected = document.getElementById('rejected');
        rejected.classList.add('hidden');

        const approvedBtn = document.getElementById('approved-btn');
        const rejectedBtn = document.getElementById('rejected-btn');
        const underReviewBtn = document.getElementById('underReview-btn');
        approvedBtn.classList.add('bg-[#686EF8]');
        rejectedBtn.classList.remove('bg-[#686EF8]');
        rejectedBtn.classList.add('bg-[#2C3743]');
        underReviewBtn.classList.remove('bg-[#686EF8]');
        underReviewBtn.classList.add('bg-[#2C3743]');
        // console.log(approved)
    }
    const underReview = () => {
        const underReview = document.getElementById('underReview');
        underReview.classList.remove('hidden');
        const approved = document.getElementById('approved');
        approved.classList.add('hidden')
        const rejected = document.getElementById('rejected');
        rejected.classList.add('hidden')

        const underReviewBtn = document.getElementById('underReview-btn');
        const approvedBtn = document.getElementById('approved-btn');
        const rejectedBtn = document.getElementById('rejected-btn');
        underReviewBtn.classList.add('bg-[#686EF8]');
        approvedBtn.classList.remove('bg-[#686EF8]');
        approvedBtn.classList.add('bg-[#2C3743]');
        rejectedBtn.classList.remove('bg-[#686EF8]');
        rejectedBtn.classList.add('bg-[#2C3743]');
        // console.log(underReview);
    }
    const rejected = () => {
        const rejected = document.getElementById('rejected');
        rejected.classList.remove('hidden');
        const approved = document.getElementById('approved');
        approved.classList.add('hidden');
        const underReview = document.getElementById('underReview');
        underReview.classList.add('hidden');

        const rejectedBtn = document.getElementById('rejected-btn');
        rejectedBtn.classList.add('bg-[#686EF8]');
        const approvedBtn = document.getElementById('approved-btn');
        const underReviewBtn = document.getElementById('underReview-btn');
        approvedBtn.classList.remove('bg-[#686EF8]');
        underReviewBtn.classList.remove('bg-[#686EF8]');
        approvedBtn.classList.add('bg-[#2C3743]');
        underReviewBtn.classList.add('bg-[#2C3743]');
        // console.log(rejected);
    }
    return (
        <div>
            <div>
            <div className='flex mt-14 border items-start justify-between pl-5 pr-5 rounded-lg py-10 bg-white'>
                        <div className='flex gap-3 items-end'>
                            <img className='rounded-full w-[100px] h-[100px]' src={user.photoURL} alt="#" />
                            <div>
                                <h3 className='text-[#1B2530] text-xl font-medium hover:text-[#686EF8] cursor-pointer pb-2'>{user.displayName}</h3>
                                <div className='flex items-center text-white bg-[#686EF8] justify-center rounded-3xl py-1 px-3'><CgEditBlackPoint className='text-xl mr-1'/><span className='mr-1'>0</span>Points</div>
                            </div>
                        </div>
                        <Link to="/dashboard/settings" className='flex items-center bg-[#686EF8] px-3 py-1 rounded-sm  text-[18px] text-white font-normal gap-1'><CiEdit className='text-2xl'/><span>Edit</span></Link>
                    </div>
                    <h2 className='text-[#1B2530] text-[36px] font-semibold py-9'>Your Submission</h2>
                    <div className='border flex justify-start gap-3 p-4 rounded bg-white'>
                        <div onClick={approved}><button id="approved-btn" className='bg-[#686EF8] py-2.5 px-6 text-white rounded'>Approved</button></div>
                        <div onClick={underReview}><button id="underReview-btn" className='bg-[#2C3743] px-5 py-2.5 rounded text-white'>Under Review</button></div>
                        <div onClick={rejected}><button id="rejected-btn" className='bg-[#2C3743] px-5 py-2.5 text-white rounded'>Rejected</button></div>
                    </div>
                    <div id="approved" className="">
                        <p>approved</p>
                        <div className='flex justify-center border py-28 rounded-md mt-8 bg-white'>
                        <div><img className='mx-auto bg-[#686EF80D] rounded-full p-5' src="https://i.postimg.cc/7h42M6WJ/empty.png" alt="#" />
                        <h3 className='text-[#000000] text-2xl font-medium pt-7'>OOOPS! It's Empty</h3>
                        <p className='text-[#79808A] text-base font-normal'>There are no items to show</p></div>
                    </div>
                    </div>
                    <div id="underReview" className="hidden">
                        <p>underReview</p>
                        <div className='flex justify-center border py-28 rounded-md mt-8 bg-white'>
                        <div><img className='mx-auto bg-[#686EF80D] rounded-full p-5' src="https://i.postimg.cc/7h42M6WJ/empty.png" alt="#" />
                        <h3 className='text-[#000000] text-2xl font-medium pt-7'>OOOPS! It's Empty</h3>
                        <p className='text-[#79808A] text-base font-normal'>There are no items to show</p></div>
                    </div>
                    </div>
                    <div id="rejected" className="hidden">
                        <p>rejected</p>
                        <div className='flex justify-center border py-28 rounded-md mt-8 bg-white'>
                        <div><img className='mx-auto bg-[#686EF80D] rounded-full p-5' src="https://i.postimg.cc/7h42M6WJ/empty.png" alt="#" />
                        <h3 className='text-[#000000] text-2xl font-medium pt-7'>OOOPS! It's Empty</h3>
                        <p className='text-[#79808A] text-base font-normal'>There are no items to show</p></div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Profile;