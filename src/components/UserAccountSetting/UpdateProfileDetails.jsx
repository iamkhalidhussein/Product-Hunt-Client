import PropTypes from "prop-types";

const UpdateProfileDetails = ({ handleUserInfoUpdate, user }) => {
    
    return (
        <div className="border bg-white py-12 px-10">
            <form onSubmit={handleUserInfoUpdate}>
                <label className="text-[#1B2530] text-base inter font-medium">Full Name</label> <br />
                <input className="border bg-white dark:text-black mt-1 mb-3 w-full py-2.5 rounded pl-4" type="text" name="full_name" id="" defaultValue={user.displayName}/> <br />
                <label className="text-[#1B2530] text-base inter font-medium">Username</label> <br />
                <input className="border bg-white mt-1 mb-3 w-full dark:placeholder:text-black py-2.5 rounded pl-4" type="text" name="username" id="" placeholder="@example..." /> <br />
                <label className="text-[#1B2530] text-base inter font-medium">Email Address</label> <br />
                <input className="border bg-white dark:text-black mt-1 mb-3 w-full py-2.5 rounded pl-4" type="email" name="" id="" value={user.email}/> <br />
                <label className="text-[#1B2530] text-base inter font-medium">Bio (optional)</label> <br />
                <input className="border bg-white mt-1 mb-3 w-full dark:placeholder:text-black dark:text-black py-2.5 rounded pl-4" type="text" name="bio" id="" placeholder="bio..." /> <br />
                <label className="text-[#1B2530] text-base inter font-medium">Website URL (optional)</label> <br />
                <input className="border bg-white dark:text-black dark:placeholder:text-black mt-1 mb-3 pr-36 py-2.5 rounded pl-4" type="text" name="website_url" id="" placeholder="http://example.com"/> <br />
                <input className="bg-[#686EF8] py-3 cursor-pointer text-white mt-6 px-6 rounded" type="submit" value="Save Now" />
            </form>
        </div>
    );
};

UpdateProfileDetails.propTypes = {
    handleUserInfoUpdate: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

export default UpdateProfileDetails;