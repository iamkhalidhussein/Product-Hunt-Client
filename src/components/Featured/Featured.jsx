import ai from '../../assets/AI.png';
import api from '../../assets/api.png';
import extension from '../../assets/chrome-extension.png';
import cloudStorage from '../../assets/cloud-storage.png';
import gradients from '../../assets/colors.png';
import inspiration from '../../assets/design-inspiration.png';
import designResource from '../../assets/design-resources.png';
import designTools from '../../assets/design-tools.png';
import developerTools from '../../assets/developer-tools.png';
import Fonts from '../../assets/fonts.png';
import Hosting from '../../assets/hosting.png';
import icons from '../../assets/icons.png';
import illustrations from '../../assets/illustrations.png';
import logos from '../../assets/logos.png';
import marketing from '../../assets/marketing.png';
import newsletter from '../../assets/newsletter.png';
import noCode from '../../assets/no-code.png';
import openSource from '../../assets/open-source.png';
import paymentGatways from '../../assets/payment.png';
import productivity from '../../assets/productivity.png';
import serverless from '../../assets/productivity.png';
import skillDevelopment from '../../assets/skill-development.png';
import stockPhotos from '../../assets/stock-photos.png';
import uiLibraries from '../../assets/ui-libraries.png';
import webDev from '../../assets/web-development.png';
import webTemplate from '../../assets/web-templates.png';
import web3 from '../../assets/web3.png';
import 'react-tooltip/dist/react-tooltip.css'
import { useState } from 'react';
import FeatureItem from './FeatureItem';
import LatestResources from './LatestResources';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';



const Featured = () => {
    const [showAll, setShowAll] = useState(false);
    const axiosPublic = useAxiosPublic();
    
    const {data: featuredProducts = [], refetch: refetchFeaturedProducts} = useQuery({
        queryKey: ['userrs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/featured-products', {
            });
            return res.data;
        }
    });
    console.log(featuredProducts)

    
    const {data: latestResources = [], refetch: refetchLatestResources} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/latest-resources', {
            });
            return res.data;
        }
    });
    // console.log(latestResources)
    
    const handleRefetch = () => {
        refetchFeaturedProducts();
        refetchLatestResources();
    }

    const handleShowAll = () => {
        setShowAll(true)
    }

    return (
        <div className="flex gap-12 bg-[#F5F8F9] pt-5 border-t-[1px]">
            <div className='border z-0 sticky left-0 top-0 h-screen w-[650px] overflow-y-auto bg-white text-[#1B2430] ml-10 mt-14 text-[18px] rounded-lg py-7 pl-10 pr-8'>
                <h3 className="text-[#1B2430] text-2xl pb-7 font-medium">Categories</h3>
                <div className='flex gap-2 mb-1 cursor-pointer py-3 rounded-md pl-4 pr-16 items-center hover:bg-[#686EF8] hover:text-white duration'><img src={ai} alt="#" /><span>AI (Artificial Intelligence)</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={api} alt="#" /><span>API</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={extension} alt="#" /><span>Chrome Extensions</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={cloudStorage} alt="#" /><span>Cloud Storage</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={gradients} alt="#" /><span>Colors And Gradients</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={inspiration} alt="#" /><span>Design Inspirations</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={designResource} alt="#" /><span>Design Resources</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={designTools} alt="#" /><span>Design Tools</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={developerTools} alt="#" /><span>Developer Tools</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={Fonts} alt="#" /><span>Fonts</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={Hosting} alt="#" /><span>Hosting</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={icons} alt="#" /><span>Icons</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={illustrations} alt="#" /><span>Illustrations</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={logos} alt="#" /><span>Logos</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={marketing} alt="#" /><span>Marketing</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={newsletter} alt="#" /><span>Newsletters</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={noCode} alt="#" /><span>No-Code</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={openSource} alt="#" /><span>Open Source</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={paymentGatways} alt="#" /><span>Payment Gateways</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={productivity} alt="#" /><span>Productivity</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={serverless} alt="#" /><span>Serverless</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={skillDevelopment} alt="#" /><span>Skill Development</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={stockPhotos} alt="#" /><span>Stock Photos</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={uiLibraries} alt="#" /><span>UI Libraries</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={webDev} alt="#" /><span>UI Web Development</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={webTemplate} alt="#" /><span>Web Templates</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-16 items-center'><img src={web3} alt="#" /><span>Web3</span></div>
            </div>
            <div className='mt-14 w-full'>
                { !showAll ?
                    <><h1 className="text-[#1B2530] text-[36px] font-medium">Featured Resources and Products</h1>
                    <p className="text-[#70808A] inter text-base font-medium pb-7">Trending, popular and featured resources, loved by the users most</p></> :
                    <><h1 className="text-[#1B2530] text-[36px] font-medium leading-10 pb-3">Free Tools, Products and Resources for <br /> Developers and Designers</h1>
                    <p className="text-[#70808A] inter text-base font-medium pb-7">You're exploring all available resources and products from all categories. Massive collection of the latest web development tools, design resources, and more. If you would like to sort them by category choose resource type from sidebar also you can sort by popular upvotes from right side. If you find something interesting feel free to submit and upvote resources you like most. All the resources handpicked for developers and designers to improve workflow.</p></>
                }
                <hr className='mr-8'/>


                <div className='grid grid-cols-2 pt-12 gap-5'>
                    { showAll ?
                        featuredProducts.map(product => <FeatureItem key={product._id} product={product} handleRefetch={handleRefetch}></FeatureItem>) :
                        featuredProducts.slice(0, 2).map(product => <FeatureItem key={product._id} product={product} handleRefetch={handleRefetch}></FeatureItem>)
                    }
                </div>

                {!showAll &&
                    <div className='flex items-center justify-between pr-3 pt-10'>
                    <div><h1 className="text-[#1B2530] text-[36px] font-medium">Latest Resources</h1>
                    <p className="text-[#70808A] inter text-base font-medium pb-7">Trending, popular and featured resources, loved by the users most</p></div>
                    <button onClick={handleShowAll} className='bg-[#686EF8] text-white text-base font-medium py-3 px-6 rounded-md cursor-pointer'>View All</button>
                    </div>
                }
                {!showAll && <hr />}
                {!showAll && 
                    <div className='grid grid-cols-2 gap-6 pt-14 pr-3'>
                        {
                            latestResources.map(product => <LatestResources key={product._id} product={product} handleRefetch={handleRefetch}></LatestResources>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Featured;