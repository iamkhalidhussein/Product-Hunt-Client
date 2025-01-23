import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import PropTypes from 'prop-types';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const ActionAlert = ({ id, refetch }) => {
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
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
            <Button variant="ghost" size="icon" onClick={() => {}} className="mr-2">
            <Edit2 className="h-4 w-4" />
            <span className="sr-only">Update</span>
            </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Approve this product?</AlertDialogTitle>
                <AlertDialogDescription>
                    This will approve the product and make it live. Ensure it meets all guidelines.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleApproved}>Approved</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ActionAlert;

ActionAlert.propTypes = {
    id: PropTypes.string,
    refetch: PropTypes.func
};