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
import upvote from '../../assets/upvote.png';
import { MdArrowOutward } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'



const Featured = () => {
    return (
        <div className="flex gap-14 bg-[#F5F8F9] border">
            <div className='border bg-white text-[#1B2430] ml-10 mt-14 text-[18px] rounded-lg py-7 pl-10 pr-8'>
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
            <div>
                <h1 className="text-[#1B2530] text-[36px] font-medium">Featured Resources and Products</h1>
                <p className="text-[#70808A] inter text-base font-medium pb-7">Trending, popular and featured resources, loved by the users most</p>
                <hr className='mr-8'/>


                <div className='flex pt-12 gap-8'>
                    <div className='border rounded-lg'>
                        <div className='p-5 pl-6'><img className='w-96 h-56 border rounded-md' src="https://i.postimg.cc/tRFGWDY5/full-stack-boiler.png" alt="#" /></div>
                        <div className='flex gap-[189px] px-5'><p className='text-[#1B2530 text-xl font-medium hover:text-[#686EF8] duration-150 cursor-pointer'>SaaSBold</p><span className='text-white bg-[#686EF8] px-3 rounded-sm py-[2px]'>Promoted</span></div>
                        <p className='text-[#79808A] pt-4 pb-5 px-5 text-base inter font-medium'>This is a comprehensive SaaS Boilerplate and <br /> Starter Kit for Next.js. It's a production-ready</p>
                        <hr />
                        <div className='flex gap-[175px] py-5 px-5'>
                            <div className='flex gap-2 border px-4 py-2 cursor-pointer rounded-[5px] border-[#6A6EF8] items-center text-[#6A6EF8] text-base inter font-medium '><img className='' src={upvote} alt="#" />Upvote<span>11</span></div>
                            <div className='flex items-center text-[#79808A] cursor-pointer text-base inter font-medium hover:text-[#6A6EF8] duration-200'>Visit Site<MdArrowOutward /></div>
                        </div>
                    </div>
                    <div className='border rounded-lg'>
                        <div className='p-5 pl-6'><img className='w-96 h-56 border rounded-md' src="https://i.postimg.cc/Pq1Q2LZB/screen-shot-designer.png" alt="#" /></div>
                        <div className='flex gap-[189px] px-5'><p className='text-[#1B2530 text-xl font-medium hover:text-[#686EF8] duration-150 cursor-pointer'>SaaSBold</p><span className='text-white bg-[#686EF8] px-3 rounded-sm py-[2px]'>Promoted</span></div>
                        <p className='text-[#79808A] pt-4 pb-5 px-5 text-base inter font-medium'>This is a comprehensive SaaS Boilerplate and <br /> Starter Kit for Next.js. It's a production-ready</p>
                        <hr />
                        <div className='flex gap-[175px] py-5 px-5'>
                            <div className='flex gap-2 border px-4 py-2 cursor-pointer rounded-[5px] border-[#6A6EF8] items-center text-[#6A6EF8] text-base inter font-medium '><img className='' src={upvote} alt="#" />Upvote<span>11</span></div>
                            <div className='flex items-center text-[#79808A] cursor-pointer text-base inter font-medium hover:text-[#6A6EF8] duration-200'>Visit Site<MdArrowOutward /></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between pt-10'>
                    <div><h1 className="text-[#1B2530] text-[36px] font-medium">Latest Resources</h1>
                    <p className="text-[#70808A] inter text-base font-medium pb-7">Trending, popular and featured resources, loved by the users most</p></div>
                    <button className='bg-[#686EF8] text-white text-base font-medium py-3 px-6 rounded-md cursor-pointer'>View All</button>
                </div>
                <hr />
                <div className='grid grid-cols-2 gap-6 pt-14'>
                <div className='border rounded-lg'>
                        <div className='p-5 pl-6'><img className='w-96 h-56 border rounded-md' src="https://i.postimg.cc/QMDVt8PG/tempolor.avif" alt="#" /></div>
                        <div className='flex justify-between px-6'><p className='text-[#1B2530 text-xl font-medium hover:text-[#686EF8] duration-150 cursor-pointer'>Tempolor</p><CiBookmark data-tooltip-id="my-tooltip" data-tooltip-content="Bookmark" className='hover:text-[#6A6EF8] text-[26px] cursor-pointer text-[#79808A]'/>
                        <Tooltip id="my-tooltip" />
                        </div>
                        <p className='text-[#79808A] pt-4 pb-5 px-5 text-base inter font-medium'>This is a comprehensive SaaS Boilerplate and <br /> Starter Kit for Next.js. It's a production-ready</p>
                        <hr />
                        <div className='flex gap-[175px] py-5 px-5'>
                            <div className='flex gap-2 border px-4 py-2 cursor-pointer rounded-[5px] border-[#6A6EF8] items-center text-[#6A6EF8] text-base inter font-medium '><img className='' src={upvote} alt="#" />Upvote<span>11</span></div>
                            <div className='flex items-center text-[#79808A] cursor-pointer text-base inter font-medium hover:text-[#6A6EF8] duration-200'>Visit Site<MdArrowOutward /></div>
                        </div>
                    </div>

                    <div className='border rounded-lg'>
                        <div className='p-5 pl-6'><img className='w-96 h-56 border rounded-md' src="https://i.postimg.cc/fWS3BrYP/projexl.avif" alt="#" /></div>
                        <div className='flex justify-between px-6'><p className='text-[#1B2530 text-xl font-medium hover:text-[#686EF8] duration-150 cursor-pointer'>Projexl</p><CiBookmark data-tooltip-id="my-tooltip" data-tooltip-content="Bookmark" className='hover:text-[#6A6EF8] text-[26px] cursor-pointer text-[#79808A]'/>
                        <Tooltip id="my-tooltip" />
                        </div>
                        <p className='text-[#79808A] pt-4 pb-5 px-5 text-base inter font-medium'>This is a comprehensive SaaS Boilerplate and <br /> Starter Kit for Next.js. It's a production-ready</p>
                        <hr />
                        <div className='flex gap-[175px] py-5 px-5'>
                            <div className='flex gap-2 border px-4 py-2 cursor-pointer rounded-[5px] border-[#6A6EF8] items-center text-[#6A6EF8] text-base inter font-medium '><img className='' src={upvote} alt="#" />Upvote<span>11</span></div>
                            <div className='flex items-center text-[#79808A] cursor-pointer text-base inter font-medium hover:text-[#6A6EF8] duration-200'>Visit Site<MdArrowOutward /></div>
                        </div>
                    </div>

                    <div className='border rounded-lg'>
                        <div className='p-5 pl-6'><img className='w-96 h-56 border rounded-md' src="https://i.postimg.cc/63v9LFFL/leadkit.avif" alt="#" /></div>
                        <div className='flex justify-between px-6'><p className='text-[#1B2530 text-xl font-medium hover:text-[#686EF8] duration-150 cursor-pointer'>LeadKit</p><CiBookmark data-tooltip-id="my-tooltip" data-tooltip-content="Bookmark" className='hover:text-[#6A6EF8] text-[26px] cursor-pointer text-[#79808A]'/>
                        <Tooltip id="my-tooltip" />
                        </div>
                        <p className='text-[#79808A] pt-4 pb-5 px-5 text-base inter font-medium'>This is a comprehensive SaaS Boilerplate and <br /> Starter Kit for Next.js. It's a production-ready</p>
                        <hr />
                        <div className='flex gap-[175px] py-5 px-5'>
                            <div className='flex gap-2 border px-4 py-2 cursor-pointer rounded-[5px] border-[#6A6EF8] items-center text-[#6A6EF8] text-base inter font-medium '><img className='' src={upvote} alt="#" />Upvote<span>11</span></div>
                            <div className='flex items-center text-[#79808A] cursor-pointer text-base inter font-medium hover:text-[#6A6EF8] duration-200'>Visit Site<MdArrowOutward /></div>
                        </div>
                    </div>

                    <div className='border rounded-lg'>
                        <div className='p-5 pl-6'><img className='w-96 h-56 border rounded-md' src="https://i.postimg.cc/85BYSHvg/opensql.avif" alt="#" /></div>
                        <div className='flex justify-between px-6'><p className='text-[#1B2530 text-xl font-medium hover:text-[#686EF8] duration-150 cursor-pointer'>opensql.ai</p><CiBookmark data-tooltip-id="my-tooltip" data-tooltip-content="Bookmark" className='hover:text-[#6A6EF8] text-[26px] cursor-pointer text-[#79808A]'/>
                        <Tooltip id="my-tooltip" />
                        </div>
                        <p className='text-[#79808A] pt-4 pb-5 px-5 text-base inter font-medium'>This is a comprehensive SaaS Boilerplate and <br /> Starter Kit for Next.js. It's a production-ready</p>
                        <hr />
                        <div className='flex gap-[175px] py-5 px-5'>
                            <div className='flex gap-2 border px-4 py-2 cursor-pointer rounded-[5px] border-[#6A6EF8] items-center text-[#6A6EF8] text-base inter font-medium '><img className='' src={upvote} alt="#" />Upvote<span>11</span></div>
                            <div className='flex items-center text-[#79808A] cursor-pointer text-base inter font-medium hover:text-[#6A6EF8] duration-200'>Visit Site<MdArrowOutward /></div>
                        </div>
                    </div>

                    <div className='border rounded-lg'>
                        <div className='p-5 pl-6'><img className='w-96 h-56 border rounded-md' src="https://i.postimg.cc/xjZvdm3w/iaskai.avif" alt="#" /></div>
                        <div className='flex justify-between px-6'><p className='text-[#1B2530 text-xl font-medium hover:text-[#686EF8] duration-150 cursor-pointer'>iAsk.AI</p><CiBookmark data-tooltip-id="my-tooltip" data-tooltip-content="Bookmark" className='hover:text-[#6A6EF8] text-[26px] cursor-pointer text-[#79808A]'/>
                        <Tooltip id="my-tooltip" />
                        </div>
                        <p className='text-[#79808A] pt-4 pb-5 px-5 text-base inter font-medium'>This is a comprehensive SaaS Boilerplate and <br /> Starter Kit for Next.js. It's a production-ready</p>
                        <hr />
                        <div className='flex gap-[175px] py-5 px-5'>
                            <div className='flex gap-2 border px-4 py-2 cursor-pointer rounded-[5px] border-[#6A6EF8] items-center text-[#6A6EF8] text-base inter font-medium '><img className='' src={upvote} alt="#" />Upvote<span>11</span></div>
                            <div className='flex items-center text-[#79808A] cursor-pointer text-base inter font-medium hover:text-[#6A6EF8] duration-200'>Visit Site<MdArrowOutward /></div>
                        </div>
                    </div>

                    <div className='border rounded-lg'>
                        <div className='p-5 pl-6'><img className='w-96 h-56 border rounded-md' src="https://i.postimg.cc/jdVhXNnz/passdropit.avif" alt="#" /></div>
                        <div className='flex justify-between px-6'><p className='text-[#1B2530 text-xl font-medium hover:text-[#686EF8] duration-150 cursor-pointer'>Passdropit</p><CiBookmark data-tooltip-id="my-tooltip" data-tooltip-content="Bookmark" className='hover:text-[#6A6EF8] text-[26px] cursor-pointer text-[#79808A]'/>
                        <Tooltip id="my-tooltip" />
                        </div>
                        <p className='text-[#79808A] pt-4 pb-5 px-5 text-base inter font-medium'>This is a comprehensive SaaS Boilerplate and <br /> Starter Kit for Next.js. It's a production-ready</p>
                        <hr />
                        <div className='flex gap-[175px] py-5 px-5'>
                            <div className='flex gap-2 border px-4 py-2 cursor-pointer rounded-[5px] border-[#6A6EF8] items-center text-[#6A6EF8] text-base inter font-medium '><img className='' src={upvote} alt="#" />Upvote<span>11</span></div>
                            <div className='flex items-center text-[#79808A] cursor-pointer text-base inter font-medium hover:text-[#6A6EF8] duration-200'>Visit Site<MdArrowOutward /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;