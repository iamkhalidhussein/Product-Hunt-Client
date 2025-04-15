import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useHandleApproved = ( id, refetch ) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const handleApproved = async () => {
        try {
            const response = await axiosSecure.patch(`products/approvependingproducts/${user?.email || user.providerData[0]?.email}/${id}`)
            if(response.data.success) {
                refetch()
                Swal.fire({
                    icon: "success",
                    title: `${response.data?.message}`,
                    timer: 2500
                });
            } else {
                console.error('Failed to approve product:', response);
                Swal.fire({
                    icon: "error",
                    title: `${response.data?.message}`,
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        } catch (error) {
            console.error('Error approving product:', error);
            Swal.fire({
                icon: "error",
                title: 'An error occurred. Please try again.',
                showConfirmButton: false,
                timer: 2500
            });
        }
    };
    
    return { handleApproved };
};

export default useHandleApproved;