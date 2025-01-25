import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic.js";
import ChangeProfilePicture from "./ChangeProfilePicture.jsx";
import UpdateProfileDetails from "./UpdateProfileDetails.jsx";
import useAxiosSecure from "../../hooks/useAxiosSecure.js";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UserAccountSetting = () => {
    const {user, updateUserProfilePic } = useContext(AuthContext);
    const [selectedImage, setSelectedImage] = useState(user.photoURL);
    const [selectedFile, setSelectedFile] = useState();
    const axiosPublic = useAxiosPublic();
    const [updatingProfile, setUpdatingProfile] = useState(false);
    const axiosSecure = useAxiosSecure();
    const [userProfileInfo, setUserProfileInfo] = useState(null);

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setSelectedFile(imageFile);
        
        if(imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            setSelectedImage(imageUrl)
        }
    };

    
    // console.log('user', user);
    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        // console.log(selectedFile);
        setUpdatingProfile(true);
        const imageFile = {image: selectedFile};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log(res.data);
        const imageUrl = res.data.data.display_url;
        await updateUserProfilePic(imageUrl);
        setUpdatingProfile(false);
        // console.log(updateRes)
    };

    const handleUserInfoUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const full_name = form.full_name.value;
        const username = form.username.value;
        const bio = form.bio.value;
        const website_url = form.website_url.value;

        const newData = {};

        if (full_name) newData.full_name = full_name;
        if (username) newData.username = username;
        if (bio) newData.bio = bio;
        if (website_url) newData.website_url = website_url;

        await axiosSecure.patch(`/users/updateuserprofileinfo/${user?.email}`, newData);
        // console.log(updateRes);

    };

    useEffect(() => {
        const fetchUserProfile = async () => {
            const fetchedData = await axiosSecure.get(`/users/userprofileinfo/${user?.email}`);
            // console.log(fetchedData)
            setUserProfileInfo(fetchedData?.data);
        };
        fetchUserProfile();
    }, [user?.email, axiosSecure]);

    return (
        <div className="pt-12">
            <h2 className="text-[#1B2530] dark:text-white text-[36px] pb-7 font-semibold">Account Settings</h2>
            <div className="md:flex gap-10">
                <ChangeProfilePicture 
                    selectedImage={selectedImage} 
                    handleImageChange={handleImageChange} 
                    handleProfileUpdate={handleProfileUpdate}
                    updatingProfile={updatingProfile}
                    selectedImageFile={selectedFile}
                />
                <UpdateProfileDetails 
                    handleUserInfoUpdate={handleUserInfoUpdate} 
                    user={userProfileInfo}
                />
            </div>
        </div>
    );
};

export default UserAccountSetting;