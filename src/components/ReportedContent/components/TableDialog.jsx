import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropTypes from 'prop-types';

const ReportedTableDialog = ({ item }) => {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2">
            <Eye className="h-4 w-4" />
            <span className="sr-only">View</span>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Reported Content Details</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
            <p>
                <strong>Content:</strong> {item?.content}
            </p>
            <p>
                <strong>Reported By:</strong> {item?.reportedBy}
            </p>
            <p>
                <strong>Reason:</strong> {item?.reportReason}
            </p>
            <p>
                <strong>Date Reported:</strong> {item?.dateReported}
            </p>
            <p>
                <strong>Status:</strong> {item?.status}
            </p>
            </div>
        </DialogContent>
    </Dialog>
    );
};

export default ReportedTableDialog;

ReportedTableDialog.propTypes = {
    item: PropTypes.object
};