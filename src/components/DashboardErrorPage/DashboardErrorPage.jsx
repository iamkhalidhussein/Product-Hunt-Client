
const DashboardErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center border py-28 rounded-md mt-8 bg-white'>
                <div><img className='mx-auto bg-[#686EF80D] rounded-full p-5' src="https://i.postimg.cc/7h42M6WJ/empty.png" alt="#" />
                <h3 className='text-[#000000] text-2xl font-medium pt-7'>OOOPS! It's Empty</h3>
                <p className='text-[#79808A] text-base font-normal'>There are no items to show</p></div>
            </div>
        </div>
    );
};

export default DashboardErrorPage;