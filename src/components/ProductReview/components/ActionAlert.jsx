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
import useHandleApproved from "../../../hooks/useHandleApproved";

const ActionAlert = ({ id, refetch }) => {
    const { handleApproved } = useHandleApproved( id, refetch );
    
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