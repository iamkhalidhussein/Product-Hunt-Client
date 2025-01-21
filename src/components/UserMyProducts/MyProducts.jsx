import { useContext, useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure.js";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2 } from 'lucide-react'


const MyProducts = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const {data: userProducts = [], isLoading, refetch} = useQuery({
        queryKey: ['userProducts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products/getSubmittedProduct/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email
    });
    // console.log('my products',userProducts)
    useEffect(() => {
        refetch(); 
    }, [user?.email, refetch])

    // console.log(isLoading)

    const handleProductDelete = (productId) => {
        // console.log('handleProductDelete', productId);

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

    return (
        <div className="container mx-auto py-14">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="font-semibold">Product Name</TableHead>
              <TableHead className="font-semibold">Votes</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Update</TableHead>
              <TableHead className="font-semibold">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userProducts.map((product) => (
              <TableRow key={product._id}>
                <TableCell className="font-medium">{product.title}</TableCell>
                <TableCell>{product.upvote}</TableCell>
                <TableCell>
                  <Badge 
                    className={
                      `${product.status === 'approved' && 'bg-green-500'}`
                    }
                    variant={
                      product.status === "pending"
                        && "default"
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {}}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleProductDelete(product._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
    );
};

export default MyProducts;