import { Link } from "react-router-dom";
import { Editor } from 'primereact/editor';
import { useContext, useState } from 'react';
import { Info, Trash } from 'phosphor-react'
import { useCallback } from 'react'
import { Upload } from 'keep-react'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProductPage = () => {
    const [text, setText] = useState();
    const [image, setImage] = useState([])
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);

    const onDrop = useCallback((acceptedFiles) => {
        setImage(acceptedFiles)
    }, [])

    // console.log(files)
    const handleProductSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const product_title = form.product_title.value;
        const product_subtitle = form.product_subtitle.value;
        const product_directLink = form.product_directLink.value;
        const product_category = form.product_category.value;
        const textWithTags = text;
        const withoutPTags = textWithTags.replace(/<p.*?>/g, '').replace(/<\/p>/g, '');
        const withoutSpanTags = withoutPTags.replace(/<span.*?>/g, '').replace(/<\/span>/g, '');
        const product_description = withoutSpanTags;
        const product_data = {product_title, product_category, product_subtitle, product_directLink, product_description, image}
        console.log(product_data)

        console.log(product_description)
        const imageFile = {image: product_data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        if(res.data.success) {
            const random = Math.floor(Math.random() * 20 + 1);
            // console.log(typeof random)
            const userProduct = {
                image: res.data.data.display_url,
                title: product_data.product_title,
                description: product_data.product_description,
                upvote: random,
                subtitle: product_data.product_subtitle,
                visit_site: product_data.product_directLink,
                creatorEmail: user.email
            }
            axiosPublic.post(`/users/submitProduct`, userProduct)
            .then((res) => {
                console.log(res.data);
                if(res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Product added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <div className="mt-12">
            <h3 className="text-[#1B2530] text-[35px] font-medium  pb-1">Submit a Product</h3>
            <p className="text-[#79808A] text-base pb-8 inter">
            Please, fill the form to submit a product or resource. <br />
            We will manually review, will approve your submission ASAP and send you a success email. All fields are required.
            </p>

            <form onSubmit={handleProductSubmit} className="">
                <div className="grid grid-cols-2 gap-5">
                    <div><label className="text-[#1B2530] text-base inter font-medium" htmlFor="">Resource or Product Title (Keep it Short)</label> 
                    <input className="bg-white py-4 pl-5 rounded mt-1 w-full" type="text" name="product_title" id="" placeholder="Tailgrids" required/></div>
                    <div><label className="text-[#1B2530] text-base inter font-medium" htmlFor="">Subtitle (Maximum 40 Characters)</label>
                    <input className="bg-white py-4 pl-5 rounded mt-1 w-full " type="text" name="product_subtitle" id="" placeholder="Tailwind UI Components and Blocks" required/></div>
                    <div><label className="text-[#1B2530] text-base inter font-medium" htmlFor="">Direct Link to Resource or Product</label>
                    <input className="bg-white py-4 pl-5 rounded mt-1 w-full" type="text" name="product_directLink" id="" placeholder="http://tailgrids.com" required/></div>
                    <div><label className="text-[#1B2530] text-base inter font-medium" htmlFor="">Select Category (Maximum 3)</label><select className="w-full appearance-none rounded mt-1  bg-white pl-5 py-4 font-body text-base text-dark-text outline-none transition" name="product_category" id="" required>
                        <option value="">Select</option>
                        <option value="110">AI (Artificial Intelligence)</option>
                        <option value="112">Serverless</option>
                        <option value="113">Productivity</option>
                        <option value="114">Cloud Storage</option>
                        <option value="115">API</option>
                        <option value="116">No-Code</option>
                        <option value="117">Web Templates</option>
                        <option value="118">Logos</option>
                        <option value="119">Developer Tools</option>
                        <option value="120">Newletters</option>
                        <option value="121">Skill Development</option>
                        <option value="122">Design Tools</option>
                        <option value="123">Colors and Gradients</option>
                        <option value="124">Chrome Extensions</option>
                        <option value="125">Web Development</option>
                        <option value="126">Web3</option>
                        <option value="127">Design Inspiration</option>
                        <option value="128">UI Libraries</option>
                        <option value="129">Payment Gateways</option>
                        <option value="130">Stock Photos</option>
                        <option value="131">Illustrations</option>
                        <option value="132">Hosting</option>
                        <option value="133">Open Source</option>
                        <option value="134">Design Resources</option>
                        <option value="135">Marketing</option>
                        <option value="136">Fonts</option>
                        <option value="137">Icons</option>
                    </select></div>
                </div>
                <label className="text-[#1B2530] bg-[#F5F8F9] pt-5 pb-1 grid grid-cols-0 text-base inter w-full font-medium" htmlFor="">Please, describe your product or resource. Must be unique and minimum of 50 words recommended.</label>
                <div>
                <div className="card" style={{width: '810px', borderRadius: '0',  backgroundColor: 'white'}}>
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px', width: '810px', backgroundColor: 'white' }} />
                    </div>
                </div><br />
                <div className="pt-5">
                    <h2 className="text-[#1B2530] text-[30px] font-medium">Upload Images for Details Page</h2>
                    <p className="text-base inter text-[#79808A] font-normal pb-7">First image will be displayed as featured image. You can add multiple images these will be visible on detailes page scroller
                    (Required image size is 1270px*760px and not more than 1MB)</p>
                    <div>
            <Upload className='border max-w-screen' options={{ onDrop }}>
                <Upload.Body>
                    <Upload.Text>
                    <p className="text-[#79808A] text-base inter font-normal">Drop image here</p>
                    <p className='text-[#79808A] text-base inter font-normal'>Or</p>
                    <div className="bg-[#79808A] cursor-pointer text-base text-white py-2 rounded px-7">Browse</div>
                    </Upload.Text>
                </Upload.Body>
                <Upload.Footer isFileExists={image.length > 0}>
                    <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
                    <Info size={16} />
                    Uploaded Files
                    </p>
                    <ul className="space-y-1">
                    {image?.map((file) => (
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
                </div>
                <div className="flex gap-5 pt-10">
                    <Link to="/dashboard/userProfile" className="bg-[#79808A] text-white text-[18px] py-3 px-7 rounded">Cancel</Link>
                    <button className="bg-[#686EF9] text-[18px] text-white py-3 px-8 rounded">Submit Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductPage;