// import PropTypes from "prop-types";
// import { Upload } from 'keep-react'
// import { Info } from 'phosphor-react'

// const AddProductFileInput = ({ onDrop, image }) => {
//     return (
//         <div className="pt-5">
//                     <h2 className="text-[#1B2530] dark:text-white text-[30px] font-medium">Upload Images for Details Page</h2>
//                     <p className="text-base inter text-[#79808A] dark:text-white font-normal pb-7">First image will be displayed as featured image. You can add multiple images these will be visible on detailes page scroller
//                     (Required image size is 1270px*760px and not more than 1MB)</p>
//                     <div>
//             <Upload className='border max-w-screen' options={{ onDrop }}>
//                 <Upload.Body>
//                     <Upload.Text>
//                     <p className="text-[#79808A] text-base inter font-normal">Drop image here</p>
//                     <p className='text-[#79808A] text-base inter font-normal'>Or</p>
//                     <div className="bg-[#79808A] cursor-pointer text-base text-white py-2 rounded px-7">Browse</div>
//                     </Upload.Text>
//                 </Upload.Body>
//                 <Upload.Footer required={true} isFileExists={image.length > 0}>
//                     <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
//                     <Info size={16} />
//                     Uploaded Image
//                     </p>
//                     <ul className="space-y-1">
//                     {image?.map((file) => (
//                         <li
//                         key={file?.name}
//                         className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600">
//                         {file?.name}
//                         </li>
//                     ))}
//                     </ul>
//                 </Upload.Footer>
//             </Upload>
//             </div>
//         </div>
//     );
// };

// AddProductFileInput.propTypes = {
//     onDrop: PropTypes.func.isRequired,
//     image: PropTypes.array.isRequired
// }

// export default AddProductFileInput;



import { Info,Trash } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Upload, UploadBody, UploadFooter, UploadIcon, UploadText } from 'keep-react'

const AddProductFileInput = () => {
    const [files, setFiles] = useState([])

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles)
    }, [])

    return (
        <Upload options={{ onDrop }}>
        <UploadBody>
            <UploadIcon>
            <img src='https://react.keepdesign.io/images/icon/folder.svg'/>
            </UploadIcon>
            <UploadText>
            <p className="text-body-3 font-medium text-metal-600 dark:text-black">Drag & Drop or Choose File to Upload</p>
            <p className="text-body-4 font-normal text-metal-400 dark:text-metal-300 dark:text-black">
                DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
            </p>
            </UploadText>
        </UploadBody>
        <UploadFooter isFileExists={files.length > 0}>
            <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600 dark:text-metal-300">
            <Info size={16} />
            Uploaded Files
            </p>
            <ul className="space-y-1">
            {files?.map((file) => (
                <li
                key={file?.name}
                className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600 dark:border-l-metal-600 dark:bg-metal-800 dark:text-metal-300 ">
                {file?.name}
                <Trash size={16} color="red" />
                </li>
            ))}
            </ul>
        </UploadFooter>
    </Upload>
    );
};

export default AddProductFileInput;