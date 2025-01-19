import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic.js";
import ChangeProfilePicture from "./ChangeProfilePicture.jsx";
import UpdateProfileDetails from "./UpdateProfileDetails.jsx";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UserAccountSetting = () => {
    const {user, updateUserProfilePic, updateUserProfileInfo} = useContext(AuthContext);
    const [selectedImage, setSelectedImage] = useState(user.photoURL);
    const [selectedFile, setSelectedFile] = useState();
    const axiosPublic = useAxiosPublic();

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setSelectedFile(imageFile);
        
        if(imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            setSelectedImage(imageUrl)
        }
    }
    
    console.log('user', user)
    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        console.log(selectedFile);
        const imageFile = {image: selectedFile};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);
        const imageUrl = res.data.data.display_url;
        const updateRes = updateUserProfilePic(imageUrl)
        console.log(updateRes)
    }

    const handleUserInfoUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const full_name = form.full_name.value;
        const username = form.username.value;
        const bio = form.bio.value;
        const website_url = form.website_url.value;

        console.log(full_name, username, bio, website_url)
        
        const updateRes = updateUserProfileInfo(full_name, username, bio, website_url);
        console.log(updateRes);


    } 
    return (
        <div className="pt-12">
            <h2 className="text-[#1B2530] dark:text-white text-[36px] pb-7 font-semibold">Account Settings</h2>
            <div className="flex gap-10">
                <ChangeProfilePicture 
                selectedImage={selectedImage} 
                handleImageChange={handleImageChange} 
                handleProfileUpdate={handleProfileUpdate}/>
                <UpdateProfileDetails 
                handleUserInfoUpdate={handleUserInfoUpdate} 
                user={user}/>
            </div>
        </div>
    );
};

export default UserAccountSetting;