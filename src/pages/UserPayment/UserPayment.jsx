import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckOutForm/CheckoutForm';
import { IoCheckmark } from "react-icons/io5";
import { CgSmile } from "react-icons/cg";
import PropTypes from 'prop-types';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const UserPayment = () => {
    return (
        <div className="mt-12">
            <ExpressPackageCard />
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default UserPayment;

const ExpressPackageCard = () => (
    <div className="w-10/12 border-[#686EF8] border-[5px] rounded-xl mb-4">
      <div className="flex justify-between items-center py-4 px-5">
        <div className="flex items-center gap-5">
          <img src="https://i.postimg.cc/jjyLH0VC/express-sign.png" alt="Express Sign" />
          <h5 className="text-[#000000] inter font-semibold text-xl">Express Submission</h5>
        </div>
        <div className="bg-[#686EF8] rounded-full">
          <IoCheckmark className="text-white text-2xl w-6 h-6 p-1" />
        </div>
      </div>
      <hr />
      <div className="flex justify-between py-5 px-5 items-center">
        <p className="text-[#374151] text-3xl font-medium inter">$50</p>
        <span className="text-[#686EF8] bg-[#686EF81A] px-3 py-[1px] text-[14px] font-medium inter rounded-xl">
          Great Value
        </span>
      </div>
      <div className="w-11/12 mx-auto pb-5">
        <table className="table rounded-t-3xl">
          <thead>
            <PaymentFeatureRow
              icon={<CgSmile className="text-xl text-green-700" />}
              label="Approval and Publish Time"
              value="Instant"
            />
          </thead>
          <tbody>
            <PaymentFeatureRow label="Promotion Duration" value="1 Week" />
            <PaymentFeatureRow label="Chance to Get Featured on Homepage" value="High" />
            <PaymentFeatureRow label="Featured on Category Page" value="Yes" />
          </tbody>
        </table>
      </div>
    </div>
  );
  
const PaymentFeatureRow = ({ icon, label, value }) => (
    <tr>
      <td className="border">
        <div className="flex items-center gap-1 text-[#475467] text-[14px] inter">
          {icon || <IoCheckmark className="text-green-700 text-base" />}
          <span>{label}</span>
        </div>
      </td>
      <td className="border text-[14px] pl-11 font-semibold inter text-[#000000] dark:text-white">
        {value}
      </td>
    </tr>
  );

PaymentFeatureRow.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string
};