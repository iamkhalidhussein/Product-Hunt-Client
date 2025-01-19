import useAxiosPublic from "./useAxiosPublic";

const useSSLCommerzPayment = () => {
    const axiosPublic = useAxiosPublic();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const backendUrl = import.meta.env.VITE_SERVER_URL;
        axiosPublic.post(`${backendUrl}/payments/create-payment`, {
            ammount: 3000,
            currenccy: 'BDT'
        })
        .then((res) => {
            console.log(res.data);
            const reDirectUrl = res.data.paymentUrl;
            if(reDirectUrl) {
                window.location.replace(reDirectUrl);
            }
        })
        .catch((error) => {
            console.log(error)
        })
    };
    return handleSubmit;
};

export default useSSLCommerzPayment;