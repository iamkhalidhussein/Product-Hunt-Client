import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PropTypes from "prop-types";
import useFileChange from "../../hooks/useFileChange";

const InputFile = ({ onImageChange }) => {
    const { handleFileChange, uploading } = useFileChange( onImageChange );

    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Photo</Label>
            <Input 
                id="picture" 
                type="file" 
                required={true} 
                disabled={uploading && true} 
                onChange={handleFileChange} 
                className="dark:border-white"
            />
            {uploading && 'uploading...'}
        </div>
    );
};

export default InputFile;

InputFile.propTypes = {
    onImageChange: PropTypes.func.isRequired,
};