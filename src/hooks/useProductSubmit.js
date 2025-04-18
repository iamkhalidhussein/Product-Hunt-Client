import { useCallback, useContext, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const useProductSubmit = () => {
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState();
    const [image, setImage] = useState([]);
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const onDrop = useCallback((acceptedFiles) => {
        setImage(acceptedFiles)
    }, []);

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
                creatorEmail: user?.email || user.providerData[0]?.email
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

    return { handleProductSubmit, setText, text, loading, image, onDrop };
};

export default useProductSubmit;