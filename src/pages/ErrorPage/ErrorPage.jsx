import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
            <div className='bg-[#F5F8F9] dark:bg-[#111827] flex justify-center max-h-screen pt-40'>
                <div>
                    <h2 className="text-[150px] leading-[170px] text-[#686EF8] font-bold text-center">404</h2>
                    <h4 className='text-[#1B2530] dark:text-white text-center font-medium text-[36px] inter'>Sorry, the page can&apos;t be found</h4>
                    <p className='text-[#79808A] pt-3 text-base inter font-medium text-center'>The page you were looking for appears to have been moved, <br /> deleted or does not exist.</p>
                    <div className='flex justify-center pt-5'><Link to="/" className='text-white bg-[#686EF8] text-[18px] font-medium py-3 px-7 rounded-md'><button>Back To Home</button></Link></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;