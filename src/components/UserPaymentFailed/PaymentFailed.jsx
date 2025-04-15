import { PaymentDetailsRow, PaymentStatusHeader } from "../UserPaymentCancel/PaymentCancel";

const PaymentFailed = () => {

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
    const error = getUrlParameter('error');

    return (
        <div className="pb-20 pt-32 border dark:bg-black bg-[#F5F8F9]">
        <div className="border md:w-2/5 w-4/5 mx-auto pt-5 pb-5 rounded-2xl px-10 bg-white dark:bg-gray-300">
            <PaymentStatusHeader 
                status={error} 
                currency_type={currency_type} 
                amount={amount}
            />
            <PaymentDetailsRow 
                label="Transaction ID" 
                value={tran_id}
            />
            <PaymentDetailsRow 
                label="Payment Time" 
                value={tran_date}
            />
            <PaymentDetailsRow 
                label="Payment Method" 
                value={card_issuer === 'undefined' ? 'Null' : card_issuer}
            />
            <hr className="mb-6"/>
            <PaymentDetailsRow 
                label="Currency Type" 
                value={currency_type}
            />
            <PaymentDetailsRow 
                label="Amount" 
                value={`${currency_type} ${amount}`}
            />
        </div>
    </div>
    );
};

export default PaymentFailed;