import PropTypes from "prop-types";
import { Info } from "phosphor-react";
import { Upload, UploadBody, UploadFooter, UploadIcon, UploadText } from "keep-react";

const AddProductFileInput = ({ onDrop, image }) => {
    return (
        <Upload options={{ onDrop }}>

            <UploadBody>
                <UploadIcon>
                    <img src="https://react.keepdesign.io/images/icon/folder.svg" alt="Folder Icon" />
                </UploadIcon>
                <UploadText>
                    <p className="text-body-3 font-medium text-metal-600 dark:text-black">
                        Drag & Drop or Choose File to Upload
                    </p>
                    <p className="text-body-4 font-normal text-metal-400 dark:text-metal-300 dark:text-black">
                        DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
                    </p>
                </UploadText>
            </UploadBody>

            <UploadFooter required={true} isFileExists={image.length > 0}>
                <UploadedFilesList files={image} />
            </UploadFooter>
        </Upload>
    );
};

export default AddProductFileInput;

const UploadedFilesList = ({ files }) => (
    <>
        <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600 dark:text-black">
            <Info size={16} />
            Uploaded Files
        </p>
        <ul className="space-y-1 dark:text-black">
            {files?.map((file) => (
                <li
                    key={file?.name}
                    className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600 dark:border-l-metal-600 dark:bg-metal-800 dark:text-metal-300"
                >
                    {file?.name}
                </li>
            ))}
        </ul>
    </>
);

UploadedFilesList.propTypes = {
    files: PropTypes.array
};

AddProductFileInput.propTypes = {
    onDrop: PropTypes.func.isRequired,
    image: PropTypes.array.isRequired,
};
