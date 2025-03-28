import { FaXTwitter } from "react-icons/fa6";
import { PiUserSound } from "react-icons/pi";
import { IoLogoDiscord } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="pt-36 bg-[#F5F8F9] dark:bg-gray-900">
            <InformationSection/>
            <div className="bg-white dark:bg-gray-900 pt-8 pb-9">
                <SubscriptionSection/>
                <FooterBottom/>
            </div>
        </div>
    );
};

export default Footer;

const InformationSection = () => {
    return (
        <div className="md:flex grid justify-evenly border">
            {[
            {
                title: "Explore",
                description:
                "Explore amazing resources and products crafted by passionate developers, designers, makers, and businesses.",
            },
            {
                title: "Support",
                description:
                "Upvote, bookmark, and share your favorite resources and products to inspire creators.",
            },
            {
                title: "Submit",
                description:
                "Found an interesting resource? Feel free to submit. Our team will review and approve ASAP.",
            },
            ].map((item, index) => (
            <div
                key={index}
                className={`py-12 ${index === 1 ? "border-x md:px-20" : ""} md:mx-0 mx-auto`}
            >
                <h3 className="text-[#1B2530] dark:text-white text-2xl font-medium pb-3">
                {item.title}
                </h3>
                <p className="text-[#79708A] dark:text-white text-base font-medium">
                {item.description}
                </p>
            </div>
            ))}
        </div>
    )
};

const SubscriptionSection = () => {
    return (
        <div className="md:flex grid justify-center gap-5 items-center">
            <h3 className="text-[#79808A] text-xl font-medium">Subscribe Newsletter</h3>
            <div className="flex items-center gap-1">
                <input
                    className="py-3 pl-5 pr-10 rounded dark:bg-[#27272A80] bg-[#F5F6F6]"
                    type="email"
                    placeholder="Enter your email"
                />
                <img
                    className="bg-[#686EF8] cursor-pointer p-2.5 rounded"
                    src="https://i.postimg.cc/KcPsh5T8/message-icon.png"
                    alt="Subscribe"
                />
            </div>
        </div>
    )
};

const FooterBottom = () => {
    return (
        <div className="md:flex justify-around pt-8 text-center">
            <p>© Copyright 2024 All Rights Reserved | Resource.fyi</p>
            <div className="flex py-3 items-center justify-center gap-4 text-[#79808A] text-xl">
                <FaXTwitter />
                <PiUserSound />
                <IoLogoDiscord />
                <FaRegCircleQuestion />
            </div>
            <ul className="text-base text-[#79808A] dark:text-white font-medium flex justify-center gap-3">
                {['Privacy Policy', 'Terms', 'Support/Contact', 'About'].map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
                ))}
            </ul>
        </div>
    )
};