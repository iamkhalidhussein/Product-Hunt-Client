import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckOutForm/CheckoutForm';
import { IoCheckmark } from "react-icons/io5";
import { CgSmile } from "react-icons/cg";


//TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)
const UserPayment = () => {
    return (
        <div className='mt-12 '>
            <div className='w-10/12 border-[#686EF8] border-[5px] rounded-xl mb-4'>
                <div className='flex justify-between items-center py-4 px-5'>
                    <div className='flex items-center gap-5'>
                        <img src="https://i.postimg.cc/jjyLH0VC/express-sign.png" alt="#" />
                        <h5 className='text-[#000000] inter font-semibold text-xl'>Express Submission</h5>
                    </div>
                    <div className='bg-[#686EF8] rounded-full'><IoCheckmark className='text-white text-2xl  w-6 h-6 p-1'/></div>
                </div>
                <hr />
                <div className='flex justify-between py-5 px-5 items-center'>
                    <p className='text-[#374151] text-3xl font-medium inter'>$50</p>
                    <span className='text-[#686EF8] bg-[#686EF81A] px-3 py-[1px] font-medium text-[14px] inter rounded-xl'>Great Value</span>
                </div>
                <div className="w-11/12 mx-auto pb-5">
                    <table className="table rounded-t-3xl">
                        {/* head */}
                        <thead className='rounded-2xl'>
                        <tr className=''>
                            <th className='border w-8/12'><div className='flex items-center gap-1'><CgSmile className='text-xl text-green-700'/><span className='text-[#475467] text-[14px] inter'>Approval and Publish Time</span></div></th>
                            <th className='border text-[14px] inter font-semibold text-[#000000]'>Instant</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td className='border'><div className='flex gap-1 items-center'><IoCheckmark className='text-green-700 text-base'/><span className='text-[#475467] text-[14px] inter'>Promotion Duration</span></div></td>
                            <td className='border text-[14px] inter font-semibold text-[#000000]'>1 Week</td>
                        </tr>
                        <tr>
                            <td className='border'><div className='flex  gap-1 items-center'><IoCheckmark className='text-green-700 text-base'/><span className='text-[#475467] text-[14px] inter'>Chance to Get Featured on Homepage</span></div></td>
                            <td className='border text-[14px] inter font-semibold text-[#000000]'>Hign</td>
                        </tr>
                        <tr>
                            <td className='border'><div className='flex items-center gap-1'><IoCheckmark className='text-green-700 text-base'/><span className='text-[#475467] text-[14px] inter'>Featured on Category Page</span></div></td>
                            <td className='border text-[14px] inter font-semibold text-[#000000]'>Yes</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default UserPayment;