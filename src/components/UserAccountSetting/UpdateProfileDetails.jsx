import PropTypes from "prop-types";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const UpdateProfileDetails = ({ handleUserInfoUpdate, user, userInfoUpdating }) => {
    const [onChange, setOnChange] = useState(false);
    
    // console.log(user)
    // console.log(onChange);

    return (
        <div className="border md:w-1/2 md:mt-0 mt-3 bg-white py-12 px-10">
            <form onSubmit={handleUserInfoUpdate}>
                <InputField
                    label="Full Name"
                    type="text"
                    name="full_name"
                    defaultValue={user?.full_name}
                    onChange={() => setOnChange(true)}
                />

                <InputField
                    label="Username"
                    type="text"
                    name="username"
                    placeholder="@example"
                    defaultValue={user?.username}
                    onChange={() => setOnChange(true)}
                />

                <InputField
                    label="Email Address"
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    readOnly
                />

                <InputField
                    label="Bio (optional)"
                    type="text"
                    name="bio"
                    placeholder="bio..."
                    defaultValue={user?.bio}
                    onChange={() => setOnChange(true)}
                    />

                <InputField
                    label="Website URL (optional)"
                    type="text"
                    name="website_url"
                    defaultValue={user?.website_url}
                    placeholder="https://example.com"
                    onChange={() => setOnChange(true)}
                />
                    <button
                        className={`bg-[#686EF8] flex gap-2 py-3 cursor-pointer text-white mt-6 px-6 rounded ${!onChange && 'pointer-events-none opacity-75'}`}
                        type="submit"
                    >{userInfoUpdating ? <>Saving...<Loader2 className="animate-spin"/></> : 'Save Now'}</button>
            </form>
        </div>
    );
};

export default UpdateProfileDetails;

const InputField = ({ 
    label, 
    type, 
    name, 
    defaultValue, 
    placeholder, 
    readOnly, 
    onChange 
}) => {
    return (
        <>
        <label className="text-[#1B2530] text-base inter font-medium">{label}</label> <br />
            <input
                className="border bg-white dark:text-black mt-1 mb-3 w-full py-2.5 rounded pl-4 dark:placeholder:text-black"
                type={type}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                readOnly={readOnly}
                onChange={onChange}
            /> <br />
        </>
    )
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func
};

UpdateProfileDetails.propTypes = {
    handleUserInfoUpdate: PropTypes.func.isRequired,
    user: PropTypes.object,
    userInfoUpdating: PropTypes.bool
};