import { GiCancel } from "react-icons/gi";

const PaymentCancel = () => {

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
            <div className="bg-red-100 p-3 rounded-full w-[54px] mx-auto"><GiCancel className="text-red-500 rounded-full text-3xl p-1"/></div>
            <h3 className="text-center pt-3 dark:text-black">Payment {error}</h3>
            <h2 className="text-[#121212] poppins text-[30px] pt-1 pb-7 text-center font-semibold">{currency_type} {amount}</h2>
            <hr className="pb-10 border-t-[2px]"/>
            <div className="flex justify-between pb-4">
                <p className="text-[#707070] text-base poppins font-normal">Transaction ID</p>
                <p className="text-[#121212] text-base poppins font-semibold">{tran_id}</p>
            </div>
            <div className="flex justify-between pb-4">
                <p className="text-[#707070] text-base poppins font-normal">Payment Time</p>
                <p className="text-[#121212] text-base poppins font-semibold">{tran_date}</p>
            </div>
            <div className="flex justify-between pb-4">
                <p className="text-[#707070] text-base poppins font-normal">Payment Method</p>
                <p className="text-[#121212] text-base poppins font-semibold">{card_issuer === 'undefined' && 'Null'}</p>
            </div>
            <hr className="mb-6"/>
            <div className="flex justify-between pb-3">
                <p className="text-[#707070] text-base poppins font-normal">Currency Type</p>
                <p className="text-[#121212] text-base poppins font-semibold">{currency_type}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-[#707070] text-base poppins font-normal">Amount</p>
                <p className="text-[#121212] text-base poppins font-semibold">{currency_type} {amount}</p>
            </div>
        </div>
    </div>
    );
};

export default PaymentCancel;