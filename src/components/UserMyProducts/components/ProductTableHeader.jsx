import { TableHead, TableHeader, TableRow } from "@/components/ui/table"
import PropTypes from 'prop-types';

export const ProductTableHeader = () => {
    return (
        <TableHeader className="bg-gray-100">
          <TableRow>
            <ProductTableHead productHeaderData={'Product Id'}/>
            <ProductTableHead productHeaderData={'Product Name'}/>
            <ProductTableHead productHeaderData={'Votes'}/>
            <ProductTableHead productHeaderData={'Status'}/>
            <ProductTableHead productHeaderData={'Delete'}/>
          </TableRow>
        </TableHeader>
    )
  };

const ProductTableHead = ({ productHeaderData }) => {
    return (
        <TableHead className="font-semibold">{productHeaderData}</TableHead>
    )
};

ProductTableHead.propTypes = {
    productHeaderData: PropTypes.string,
};