import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='md:flex items-center justify-around bg-[#EAF0F2] dark:bg-black relative md:pt-44 pt-32 md:pb-24 pb-10 '>
            <img draggable={false} className="absolute select-none left-0 top-44" src="https://i.postimg.cc/nVG9bPBs/bg-left.png" alt="#" />
            <div>
                <h1 className='text-[#1B2530] dark:text-white text-[45px] pb-4 font-semibold text-center leading-[54px] banner-bg-left md:w-1/2 mx-auto'>Resources, Products, and Tools Curated for <ReactTyped
                    strings={[
                        "Creators",
                        "Coders",
                        "Marketers",
                        "Business",
                        "StartUps",
                        "Developers",
                        "Designers",
                        "Markers",
                        ]}
                        typeSpeed={60}
                        backSpeed={60}
                        attr="placeholder"
                        loop>
                        <input className="w-[250px] select-none dark:bg-black bg-[#EAF0F2] placeholder:text-[#1B2530] dark:placeholder:text-white" disabled type="text" />
                </ReactTyped></h1>
                <p className='text-center md:px-52 px-2 pb-10'>Resources, Products, and Tools Curated forExplore, Submit and Support - Products, Resources and Tools handpicked for developers, designers, marketers, tech enthusiasts, and professionals. Create a profile, bookmark resources for later, upvote the <br /> resources you like, or submit products or tools for free to get listed!</p>
                <div className="flex justify-center text-[18px] gap-5 text-white">
                    <button className="bg-[#1B2530] py-3 px-8 rounded-md">Browse All</button>
                    <Link to="dashboard/addProductPage" className="bg-[#686EF8] py-3 px-8 rounded-md">Submit Resource</Link>
                </div>
            </div>
            <img draggable={false} className="absolute select-none right-0 top-44" src="https://i.postimg.cc/9fbsjVm8/bg-right.png" alt="#" />
        </div>
    );
};

export default Banner;