import { TableCell, TableRow } from "@/components/ui/table"
import { Skeleton } from '@/components/ui/skeleton';

const TableRowSkeleton = () => {
    return (
        <>
        {Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                    <TableCell>
                        <Skeleton className="h-4 w-[150px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 w-[50px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 w-[100px]" />
                    </TableCell>
                    <TableCell className="text-right">
                        <div className="flex gap-2">
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                    </TableCell>
                </TableRow>
            ))}
        </>
    );
};

export default TableRowSkeleton;