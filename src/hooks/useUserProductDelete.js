import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";
import useFetchUserProducts from "./useFetchUserProducts";

const useUserProductDelete = () => {
    const axiosSecure = useAxiosSecure();
    const [ , refetch ] = useFetchUserProducts();

    const handleProductDelete = (productId) => {
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
                    // console.log('Product deleted successfully', res.data);
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
                    // console.log('Error deleting product', error?.message);
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

    return handleProductDelete;
};

export default useUserProductDelete;