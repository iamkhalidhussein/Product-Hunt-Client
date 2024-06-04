import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoCloudUploadOutline } from "react-icons/io5";


const Settings = () => {
    const {user} = useContext(AuthContext);
    const [selectedImage, setSelectedImage] = useState(user.photoURL);

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        if(imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            setSelectedImage(imageUrl)
        }
    }
    return (
        <div className="pt-12">
            <h2 className="text-[#1B2530] text-[36px] pb-7 font-medium">Account Settings</h2>
            <div className="flex gap-10">
                <div className="bg-white py-9 h-full px-10 border rounded">
                    <p className="text-[#1B2530] pb-6 text-base text-center inter">Change Your Profile Picture</p>
                    <div className="relative">
                        <div>
                        {selectedImage &&
                            <img className="rounded-full w-32 h-32 mb-5 mx-auto" src={selectedImage} alt="#" />
                        }
                        </div>
                        <label className="absolute cursor-pointer -bottom-1 right-10" htmlFor="fileInput">
                            <IoCloudUploadOutline className="text-xl"/>
                        </label>
                    </div>
                    <input id="fileInput" className="hidden" type="file" accept="image/*" name="" onChange={handleImageChange} />
                    <div className="flex justify-center"><button className="bg-[#686EF8] py-3 px-6 rounded text-white">Change & Save</button></div>
                </div>
                <div className="border bg-white py-12 px-10">
                    <form>
                        <label className="text-[#1B2530] text-base inter font-medium">Full Name</label> <br />
                        <input className="border bg-white mt-1 mb-3 pr-36 py-2.5 rounded pl-4" type="text" name="" id="" placeholder="Md Khalid"/> <br />
                        <label className="text-[#1B2530] text-base inter font-medium">Username</label> <br />
                        <input className="border bg-white mt-1 mb-3 pr-36 py-2.5 rounded pl-4" type="text" name="" id="" placeholder="Md Khalid"/> <br />
                        <label className="text-[#1B2530] text-base inter font-medium">Email Address</label> <br />
                        <input className="border bg-white mt-1 mb-3 pr-36 py-2.5 rounded pl-4" type="email" name="" id="" placeholder="Md Khalid"/> <br />
                        <label className="text-[#1B2530] text-base inter font-medium">Bio (optional)</label> <br />
                        <input className="border bg-white mt-1 mb-3 pr-36 py-2.5 rounded pl-4" type="text" name="" id="" placeholder="Md Khalid"/> <br />
                        <label className="text-[#1B2530] text-base inter font-medium">Website URL (optional)</label> <br />
                        <input className="border bg-white mt-1 mb-3 pr-36 py-2.5 rounded pl-4" type="text" name="" id="" placeholder="Md Khalid"/> <br />
                        <input className="bg-[#686EF8] py-3 cursor-pointer text-white mt-6 px-6 rounded" type="submit" value="Save Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;