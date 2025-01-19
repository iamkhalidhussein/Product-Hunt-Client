import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PropTypes from "prop-types";
import { useState } from "react";

const InputFile = ({ onImageChange }) => {
    const [uploading, setUploading] = useState(false);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if(!file) {
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'resource-fyi-user-profile');

        setUploading(true);
        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_Cloudinary_Cloud_Name}/image/upload`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            if(response.ok) {
                const uploadedImageUrl = data.secure_url;
                onImageChange(uploadedImageUrl)
            } else {
                console.error('upload failed', data.error.message);
            }
        } catch (error) {
            console.error('error while uploading', error);
        } finally {
            setUploading(false);
        }
    }


    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Photo</Label>
            <Input id="picture" type="file" required={true} disabled={uploading && true} onChange={handleFileChange} className="dark:border-white"/>{uploading && 'uploading...'}
        </div>
    );
};

export default InputFile;

InputFile.propTypes = {
    onImageChange: PropTypes.func.isRequired,
};