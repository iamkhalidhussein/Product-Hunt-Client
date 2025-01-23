import { TableHeader, TableHead, TableRow } from "@/components/ui/table";

export const ReportedTableHeader = () => {
    return (
        <>
            <TableHeader>
            <TableRow>
                <TableHead>Content</TableHead>
                <TableHead>Reported By</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
            </TableRow>
            </TableHeader>
        </>
    );
};