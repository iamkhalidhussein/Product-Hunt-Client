import { LuUser } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillDiscord } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import {Link} from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import {AuthContext} from '../../providers/AuthProvider';
import { Switch } from "@/components/ui/switch";
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu';

const Navbar = () => {
    const {user} = useContext(AuthContext);

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("resourcefyi-theme") === "dark";
    });

    const handleThemeChange = () => {
        setTheme(!theme);
        localStorage.setItem("resourcefyi-theme", !theme ? "dark" : "light");
    }

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme);
    }, [theme]);
    // console.log(theme);
    
    // console.log(user)
    return (
        <div className="flex justify-between fixed z-10 w-full px-3 md:px-10 dark:bg-black bg-[#F5F8F9] py-6 border ">
            <Link to="/" className="flex items-center cursor-pointer"><img src="https://i.postimg.cc/0jwXHLS8/main-logo.png" alt="logo" /></Link>

            <div className="md:hidden block">
                <DropdownMenu/>
            </div>
            <div className="md:flex hidden gap-5 items-center">
                <div className="flex items-center relative">
                    <input className="border py-3 rounded bg-white pl-5 pr-14 placeholder:text-[16px] placeholder:font-normal dark:bg-[#27272A80]" type="text" name="" id="" placeholder="Search resources"/>
                    <img className="absolute h-[20px] w-[20px] left-60" src="https://i.postimg.cc/d0rTBzZ4/search-bar.png" alt="#" />
                </div>
                <Switch id="airplane-mode" checked={theme} onClick={handleThemeChange}/>
                <img className="w-[139px] h-[48px] rounded border" src="https://i.postimg.cc/x1HGds3D/fb-white-a509826d.gif" alt="#" />
                <img className="w-[139px] h-[48px] border rounded" src="https://i.postimg.cc/L8MNKqrV/gg-white-cc5716c4.gif" alt="#" />
                <div className="flex items-center"><FaXTwitter className="text-slate-400 text-[21px]"/></div>
                <div className="flex items-center"><AiFillDiscord className="text-slate-500 text-[22px]"/></div>
                <div className="flex items-center cursor-pointer"><FiPlus className="text-xl"/><span className="text-[#79808A] text-[18px]">Submit</span></div>
                {
                    user ? <>
                        <Link to='/dashboard' className="flex items-center cursor-pointer bg-[#686EF8] py-2.5 px-4 rounded-sm gap-2"><LuUser className="text-white text-[18px]"/><span className="text-white">Dashboard</span></Link>
                    </> 
                    : <><Link to='/login' className="flex items-center cursor-pointer bg-[#686EF8] py-2.5 px-4 rounded-sm gap-2"><LuUser className="text-white text-[18px]"/><span className="text-white">Account</span></Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;
