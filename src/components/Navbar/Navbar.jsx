import { LuUser } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillDiscord } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";



const Navbar = () => {
    const [password, setPassword] = useState(false);
    const passwordToogle = () => {
        setPassword(!password)
    }

    return (
        <div className="flex justify-between fixed z-10 w-full px-10 bg-[#F5F8F9] py-6 border ">
            <div className="flex items-center cursor-pointer"><img src="https://i.postimg.cc/0jwXHLS8/main-logo.png" alt="logo" /></div>

            <div className="flex gap-5 items-center">
                <div className="flex items-center relative">
                    <input className="border py-3 rounded bg-white pl-5 pr-14 placeholder:text-[16px] placeholder:font-normal" type="text" name="" id="" placeholder="Search resources"/>
                    <img className="absolute h-[20px] w-[20px] left-60" src="https://i.postimg.cc/d0rTBzZ4/search-bar.png" alt="#" />
                </div>
                <div className="bg-white border flex items-center p-3.5 cursor-pointer rounded"><img className="w-5 h-5" src="https://i.postimg.cc/7hW6DVT5/light-theme.png" alt="" /></div>
                <img className="w-[139px] h-[48px] rounded border" src="https://i.postimg.cc/x1HGds3D/fb-white-a509826d.gif" alt="#" />
                <img className="w-[139px] h-[48px] border rounded" src="https://i.postimg.cc/L8MNKqrV/gg-white-cc5716c4.gif" alt="#" />
                <div className="flex items-center"><FaXTwitter className="text-slate-400 text-[21px]"/></div>
                <div className="flex items-center"><AiFillDiscord className="text-slate-500 text-[22px]"/></div>
                <div className="flex items-center cursor-pointer"><FiPlus className="text-xl"/><span className="text-[#79808A] text-[18px]">Submit</span></div>
                <div onClick={()=>document.getElementById('my_modal_3').showModal()} className="flex items-center cursor-pointer bg-[#686EF8] py-2.5 px-4 rounded-sm gap-2"><LuUser className="text-white text-[18px]"/><span className="text-white">Account</span></div>
                <dialog id="my_modal_3" className="modal rounded-md p-16">
                <div className="modal-box bg-white">
                    <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7 h-7 text-xl">✕</button>
                    <img className="mx-auto" src="https://i.postimg.cc/0jwXHLS8/main-logo.png" alt="#" />
                    <p className="text-center text-[#79808A] text-base inter pb-9 pt-3">Sign in with your social media account to submit, <br /> upvote and bookmark resources.</p>
                    <label>Email</label> <br />
                    <input className="border w-full py-3 pl-4 bg-white rounded-md mt-1 mb-3" type="email" name="" id="" placeholder="Your Email"/> <br />
                    <label>Password</label> <br />
                    <div className="flex relative"><input className="border w-full py-3 pl-4 bg-white rounded-md mt-1 mb-3" type={`${password ? 'text' : 'password'}`} name="" id="" placeholder="Your Password"/><div onClick={passwordToogle} className="absolute right-3 top-5"><IoEyeOutline className={`${password ? 'hidden' : 'visible'}`}/><IoEyeOffSharp className={`${password ? 'visible' : 'hidden'}`}/></div></div><br />
                    <input className="border py-3 w-full text-black rounded-md mb-4 hover:text-white cursor-pointer hover:bg-[#686EF8] duration-200" type="submit" value="Login" />
                    </form>
                    
                    <div className="flex flex-col w-full">
                        <div className="divider">Or</div>
                    </div>

                    <div className="border py-3 rounded flex gap-3 items-center justify-center hover:bg-[#F5F8F9] duration-200 cursor-pointer group">
                        <FcGoogle className="text-2xl"/>
                        <p className="text-[#79808A] text-base inter font-normal group-hover:text-[#686EF8]">Sign in with Google</p>
                    </div>
                    <div className="border py-3 mt-3 rounded flex gap-3 items-center justify-center hover:bg-[#F5F8F9] duration-200 cursor-pointer group">
                        <FaGithub className="text-2xl"/>
                        <p className="text-[#79808A] group-hover:text-[#686EF8] text-base inter font-normal">Sign in with Github</p>
                    </div>
                    <p className="text-[#79808A] text-base inter font-normal text-center pt-8">We won't share any post or activity on your <br /> profile, social login is here to fight spam.</p>
                </div>
                </dialog>
            </div>
        </div>
    );
};

export default Navbar;


{/* <img src="" alt="#" />
<img src="" alt="#" />
<img src="" alt="#" />
<img src="" alt="#" />
<img src="" alt="#" /> */}