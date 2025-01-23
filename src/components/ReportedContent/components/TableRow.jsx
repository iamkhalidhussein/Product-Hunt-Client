import { TableCell, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react";
import PropTypes from 'prop-types';
import ReportedTableDialog from './TableDialog';

const ReportedTableRow = ({ item }) => {
    return (
        <>
        <TableRow>
            <TableCell className="font-medium">
                {item?.content?.length > 50 ? `${item.content.substring(0, 50)}...` : item?.content}
            </TableCell>
            <TableCell>{item?.reportedBy}</TableCell>
            <TableCell>{item?.reportReason}</TableCell>
            <TableCell>{item?.dateReported}</TableCell>
            <TableCell>
                <Badge
                variant={item?.status === "Approved" ? "default" : item?.status === "Reviewed" ? "secondary" : "outline"}
                >
                {item?.status}
                </Badge>
            </TableCell>
            <TableCell className="text-right">
                <ReportedTableDialog item={item} />
                <Button variant="outline" size="icon" onClick={() => {}}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove</span>
                </Button>
            </TableCell>
            </TableRow>
        </>
    );
};

export default ReportedTableRow;

ReportedTableRow.propTypes = {
    item: PropTypes.object
};