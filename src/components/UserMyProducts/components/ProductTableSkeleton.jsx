import { TableCell, TableRow, TableBody } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductTableSkeleton = () => {
    return (
        <TableBody>
        {Array.from({ length: 6 }).map((_, index) => (
            <TableRow key={index}>
            <TableCell>
                <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-4 w-[200px]" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-4 w-[50px]" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-4 w-[80px]" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-4 w-[40px]" />
            </TableCell>
            </TableRow>
        ))}
    </TableBody>
    );
};