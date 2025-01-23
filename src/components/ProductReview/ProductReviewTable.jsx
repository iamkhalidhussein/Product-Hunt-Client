import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2 } from "lucide-react"
import PropTypes from 'prop-types';
import TableRowSkeleton from "./components/TableRowSkeleton";

const ProductReviewTable = ({ products, loading }) => {
    return (
        <Table className="container mx-auto py-10">
            <TableHeader>
            <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Votes</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            { loading ?
            <TableRowSkeleton/>
            : products.map((product) => (
                <TableRow key={product._id}>
                <TableCell className="font-medium">{product.title}</TableCell>
                <TableCell>{product.upvote}</TableCell>
                <TableCell>
                    <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            product.status === "approved" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                    >
                    {product.status}
                    </span>
                </TableCell>
                <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => {}} className="mr-2">
                    <Edit2 className="h-4 w-4" />
                    <span className="sr-only">Update</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => {}}>
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                    </Button>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    );
};

export default ProductReviewTable;

ProductReviewTable.propTypes = {
    products: PropTypes.array,
    loading: PropTypes.bool
};