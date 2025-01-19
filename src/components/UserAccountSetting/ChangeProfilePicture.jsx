import { IoCloudUploadOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const ChangeProfilePicture = ({ 
    selectedImage, 
    handleImageChange,
    handleProfileUpdate 
    }) => {

    return (
        <div className="bg-white py-9 h-full px-10 border rounded">
            <p className="text-[#1B2530] pb-6 text-base text-center inter">Change Your Profile Picture</p>
            <div className="relative">
                <div>
                {selectedImage &&
                    <img className="rounded-full w-32 h-32 mb-5 mx-auto" src={selectedImage} alt="#" />
                }
                </div>
                <label className="absolute cursor-pointer -bottom-1 right-10 dark:text-black" htmlFor="fileInput">
                    <IoCloudUploadOutline className="text-xl"/>
                </label>
            </div>
            <input id="fileInput" className="hidden" type="file" accept="image/*" name="" onChange={handleImageChange} />
            <div onClick={handleProfileUpdate} className="flex justify-center"><button className="bg-[#686EF8] py-3 px-6 rounded text-white">Change & Save</button></div>
        </div>
    );
};

ChangeProfilePicture.propTypes = {
    selectedImage: PropTypes.string.isRequired,
    handleImageChange: PropTypes.func.isRequired,
    handleProfileUpdate: PropTypes.func.isRequired
}

export default ChangeProfilePicture;