import { useContext, useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure.js";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyProducts = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const {data: userProducts = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products/getSubmittedProduct/${user.email}`, {
            });
            return res.data;
        }
    });
    console.log(userProducts)
    useEffect(() => {
        refetch(); 
    }, [])

    const handleProductDelete = (productId) => {
        console.log('handleProductDelete', productId);

        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to delete this product?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/products/deleteUserProduct/${productId}`)
                .then((res) => {
                    console.log('Product deleted successfully', res.data);
                    if(res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            icon:'success',
                            title: 'Product deleted',
                            text: 'Product deleted successfully',
                            showConfirmButton: false,
                            timer: 2000,
                        })
                    }
                })
                .catch((error) => {
                    console.log('Error deleting product', error?.message);
                    Swal.fire({
                        icon:'error',
                        title: 'Error Occured while deleting product',
                        text: `${error?.message}`,
                        showConfirmButton: true,
                    })
                })
            }
        });

    }
    return (
        <div className="mt-12">
            <h3 className="text-[#1B2530] text-[35px] font-medium">My Products</h3>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Votes</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    userProducts.map((product,idx) => 
                    <tr key={product._id}>
                        <th>{idx+1}</th>
                        <td>{product.title}</td>
                        <td>{product.upvote}</td>
                        <td>{product.pending_status ? 'Accepted' : 'Pending'}</td>
                        <td><button className="bg-blue-500 text-white py-[8px] rounded-md px-3">Update</button></td>
                        <td onClick={() => handleProductDelete(product._id)}><button className="bg-red-500 text-white py-[8px] rounded-md px-3">Delete</button></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyProducts;