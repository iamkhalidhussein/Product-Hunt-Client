import { useContext, useState } from 'react';
import { useCallback } from 'react'
import useAxiosPublic from "../../hooks/useAxiosPublic.js";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import AddProductButtons from "./AddProductButtons.jsx";
import AddProductFileInput from './AddProductFileInput.jsx';
import AddProductTxtEditor from './AddProductTxtEditor.jsx';
import AddProductHeader from './AddProductHeader.jsx';
import AddProductInputs from './AddProductInputs.jsx';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProductPage = () => {
    const [text, setText] = useState();
    const [image, setImage] = useState([])
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        setImage(acceptedFiles)
    }, []);

    // console.log(files)
    const handleProductSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
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
        // console.log(product_data)

        // console.log(product_description)
        const imageFile = {image: product_data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log(res.data)
        if(res.data.success) {
            // console.log(typeof random)
            const userProduct = {
                image: res.data.data.display_url,
                title: product_data.product_title,
                description: product_data.product_description,
                upvote: 0,
                status: 'pending',
                subtitle: product_data.product_subtitle,
                visit_site: product_data.product_directLink,
                creatorEmail: user.email
            };
            axiosPublic.post(`/products/submitProduct`, userProduct)
            .then((res) => {
                // console.log(res.data);
                if(res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Product added successfully",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <div className="mt-12">
            <AddProductHeader/>
            <form onSubmit={handleProductSubmit} className="">
                <AddProductInputs/>
                <AddProductTxtEditor setText={setText} text={text}/>
                <br />
                <AddProductFileInput onDrop={onDrop} image={image}/>
                <AddProductButtons loading={loading}/>
            </form>
        </div>
    );
};

export default AddProductPage;