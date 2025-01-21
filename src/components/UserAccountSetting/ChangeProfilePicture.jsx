import { IoCloudUploadOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from "react";

const ChangeProfilePicture = ({ 
    selectedImage, 
    handleImageChange,
    handleProfileUpdate,
    updatingProfile,
    selectedImageFile
    }) => {
    
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="bg-white py-9 h-full px-10 border rounded">
            <p className="text-[#1B2530] pb-6 text-base text-center inter">Change Your Profile Picture</p>

            <div className="relative">
                <div>
                    {!imageLoaded && 
                        <Skeleton 
                            className="h-32 mx-auto dark:bg-gray-500 mb-3 w-32 rounded-full"
                        />
                    }
                    {selectedImage &&
                        <img 
                            className={`rounded-full w-32 h-32 mb-5 mx-auto ${!imageLoaded && 'hidden'}`} 
                            src={selectedImage} alt="#"
                            onLoad={() => setImageLoaded(true)}
                        />
                    }
                </div>

                <label 
                    className="absolute cursor-pointer -bottom-1 right-10 dark:text-black" 
                    htmlFor="fileInput">
                    <IoCloudUploadOutline className="text-xl"/>
                </label>
            </div>

            <input 
                id="fileInput" 
                className="hidden" 
                type="file" 
                accept="image/*" 
                name="" 
                onChange={handleImageChange} 
            />

            <div 
                onClick={handleProfileUpdate} 
                className={`flex justify-center ${updatingProfile || selectedImageFile === undefined && 'pointer-events-none opacity-70 cursor-not-allowed'}`}
            >
                <Button 
                    className="bg-[#686EF8] hover:bg-[#686EF8] py-3 px-6 rounded text-white"> {updatingProfile ? 
                    <>
                        Saving...<Loader2 className="animate-spin"/>
                    </>
                    : 'Change & Save'}
                </Button>
            </div>
        </div>
    );
};

ChangeProfilePicture.propTypes = {
    selectedImage: PropTypes.string.isRequired,
    handleImageChange: PropTypes.func.isRequired,
    handleProfileUpdate: PropTypes.func.isRequired,
    updatingProfile: PropTypes.bool,
    selectedImageFile: PropTypes.func
}

export default ChangeProfilePicture;