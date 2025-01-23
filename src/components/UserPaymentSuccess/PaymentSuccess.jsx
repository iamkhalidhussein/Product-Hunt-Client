import { IoMdCheckmark } from "react-icons/io";
import { PaymentDetailsRow } from '../UserPaymentCancel/PaymentCancel';

const PaymentSuccess = () => {
    
    // Function to get URL parameter value
    function getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    const tran_id = getUrlParameter('tran_id');
    const card_issuer = getUrlParameter('card_issuer');
    const tran_date = getUrlParameter('tran_date');
    const currency_type = getUrlParameter('currency_type');
    const amount = getUrlParameter('amount');

    return (
        <div className="pb-20 pt-32 border bg-[#F5F8F9] dark:bg-black">
        <div className="border md:w-2/5 w-4/5 mx-auto pt-5 pb-5 rounded-2xl px-10 bg-white dark:bg-gray-200">
            <div className="bg-[#23A26D1F] p-3 rounded-full w-[54px] mx-auto"><IoMdCheckmark className="text-white bg-[#23A26D] rounded-full text-3xl p-1"/></div>
            <PaymentDetailsRow label="Transaction ID" value={tran_id}/>
            <PaymentDetailsRow label="Payment Time" value={tran_date}/>
            <PaymentDetailsRow 
                label="Payment Method" 
                value={card_issuer === 'undefined' ? 'Null' : card_issuer}
            />
            <hr className="mb-6"/>
            <PaymentDetailsRow label="Currency Type" value={currency_type}/>
            <PaymentDetailsRow label="Amount" value={`${currency_type} ${amount}`}/>
        </div>
    </div>
    );
};

export default PaymentSuccess;