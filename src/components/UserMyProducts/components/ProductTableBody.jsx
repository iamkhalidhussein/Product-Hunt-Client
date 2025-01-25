import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from 'lucide-react';
import PropTypes from 'prop-types';

export const ProductTableBody = ({ userProducts, handleProductDelete }) => {
    return (
      <TableBody>
        {userProducts.map((product) => (
          <TableRow key={product._id}>
            <TableCell className="font-medium">{product._id}</TableCell>
            <TableCell className="font-medium">{product.title}</TableCell>
            <TableCell>{product.upvote}</TableCell>
            <TableCell>
              <StatusBadge product={product}/>
            </TableCell>
            <TableCell>
              <DeleteButton 
                  product={product} 
                  handleProductDelete={handleProductDelete}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    )
  };

const StatusBadge = ({ product }) => {
  return (
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
  )
};

const DeleteButton = ({ product, handleProductDelete }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => handleProductDelete(product._id)}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  )
};

StatusBadge.propTypes = {
    product: PropTypes.object,
};

DeleteButton.propTypes = {
    product: PropTypes.object,
    handleProductDelete: PropTypes.func
};

ProductTableBody.propTypes = {
    userProducts: PropTypes.array.isRequired,
    handleProductDelete: PropTypes.func.isRequired
};