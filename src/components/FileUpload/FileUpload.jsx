import { Info, Trash } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Upload } from 'keep-react'

const FileUpload = () => {
    const [files, setFiles] = useState([])

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles)
    }, [])

    return (
        <div>
            <Upload className='border max-w-screen' options={{ onDrop }}>
                <Upload.Body>
                    <Upload.Text>
                    <p className="text-[#79808A] text-base inter font-normal">Drop image here</p>
                    <p className='text-[#79808A] text-base inter font-normal'>Or</p>
                    <button className="bg-[#79808A] text-base text-white py-2 rounded px-7">Browse</button>
                    </Upload.Text>
                </Upload.Body>
                <Upload.Footer isFileExists={files.length > 0}>
                    <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
                    <Info size={16} />
                    Uploaded Files
                    </p>
                    <ul className="space-y-1">
                    {files?.map((file) => (
                        <li
                        key={file?.name}
                        className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600">
                        {file?.name}
                        <Trash size={16} color="red" />
                        </li>
                    ))}
                    </ul>
                </Upload.Footer>
            </Upload>
        </div>
    );
};

export default FileUpload;
