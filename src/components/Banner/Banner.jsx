import { ReactTyped } from "react-typed";

const Banner = () => {
    return (
        <div className='flex items-center justify-around bg-[#EAF0F2]  relative pt-44 pb-24 '>
            <img draggable={false} className="absolute select-none left-0 top-44" src="https://i.postimg.cc/nVG9bPBs/bg-left.png" alt="#" />
            <div>
                <h1 className='text-[#1B2530] text-[45px] pb-4 font-semibold text-center leading-[54px] banner-bg-left'>Resources, Products, and Tools <br /> Curated for <ReactTyped
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
                        <input className="w-[250px] select-none bg-[#EAF0F2] placeholder:text-[#1B2530]" disabled type="text" />
                </ReactTyped></h1>
                <p className='text-center px-52 pb-10'>Resources, Products, and Tools Curated forExplore, Submit and Support - Products, Resources and Tools handpicked for developers, designers, marketers, tech enthusiasts, and professionals. Create a profile, bookmark resources for later, upvote the <br /> resources you like, or submit products or tools for free to get listed!</p>
                <div className="flex justify-center text-[18px] gap-5 text-white">
                    <button className="bg-[#1B2530] py-3 px-8 rounded-md">Browse All</button>
                    <button className="bg-[#686EF8] py-3 px-8 rounded-md">Submit Resource</button>
                </div>
            </div>
            <img draggable={false} className="absolute select-none right-0 top-44" src="https://i.postimg.cc/9fbsjVm8/bg-right.png" alt="#" />
        </div>
    );
};

export default Banner;