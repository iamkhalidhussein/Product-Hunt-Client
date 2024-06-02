import { FaXTwitter } from "react-icons/fa6";
import { PiUserSound } from "react-icons/pi";
import { IoLogoDiscord } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="pt-36 bg-[#F5F8F9]">
            <div className="flex justify-evenly border">
                <div className="py-12">
                    <h3 className="text-[#1B2530] text-2xl font-medium pb-3">Explore</h3>
                    <p className="text-[#79708A] text-base inter font-medium">Explore amazing resources and products <br /> crafted by passionate developers, <br /> designers, makers and businesess.</p>
                </div>
                <div className="border-x-[1px] py-12 px-20">
                    <h3 className="text-[#1B2530] text-2xl font-medium pb-3">Support</h3>
                    <p className="text-[#79708A] text-base inter font-medium">Upvote, bookmark and share your <br /> favourite resources and products to <br /> inspire creators.</p>
                </div>
                <div className="py-12">
                    <h3 className="text-[#1B2530] text-2xl font-medium pb-3">Submit</h3>
                    <p className="text-[#79708A] text-base inter font-medium">Found an interesting resource? feel free <br /> to submit our team will review and <br /> approve ASAP.</p>
                </div>
            </div>

            <div className="bg-white pt-8 pb-9">
                <div className="flex justify-center gap-5 items-center">
                    <h3 className="text-[#79808A] text-xl font-medium">Subscribe Newsletter</h3>
                    <input className="py-3 pl-5 pr-10 rounded bg-[#F5F6F6]" type="email" name="" id="" placeholder="Enter your email"/>
                    <img className="bg-[#686EF8] cursor-pointer p-2.5 rounded" src="https://i.postimg.cc/KcPsh5T8/message-icon.png" alt="#" />
                </div>
                <div className="flex justify-around pt-8">
                    <p>© Copyright 2024 All Rights Reserved | Resource.fyi</p>
                    <div className="flex items-center gap-4"><FaXTwitter className="text-xl text-[#79808A]"/>
                    <PiUserSound className="text-xl text-[#79808A]"/>
                    <IoLogoDiscord className="text-xl text-[#79808A]"/>
                    <FaRegCircleQuestion className="text-xl text-[#79808A]"/></div>
                    <ul className="text-base text-[#79808A] font-medium flex gap-3">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Support Contact</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;