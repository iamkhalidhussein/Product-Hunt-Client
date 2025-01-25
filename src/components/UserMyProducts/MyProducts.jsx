import { useEffect } from "react";
import { Table } from "@/components/ui/table";
import useAuth from "../../hooks/useAuth.js";
import useFetchUserProducts from "../../hooks/useFetchUserProducts.js";
import useUserProductDelete from "../../hooks/useUserProductDelete.js";
import { ProductTableBody } from "./components/ProductTableBody.jsx";
import { ProductTableHeader } from "./components/ProductTableHeader.jsx";
import { ProductTableSkeleton } from "./components/ProductTableSkeleton.jsx";

const MyProducts = () => {
    const { user } = useAuth();

    const [ userProducts, refetch, isLoading ] = useFetchUserProducts();

    useEffect(() => {
        refetch(); 
    }, [user?.email, refetch])

    const handleProductDelete = useUserProductDelete();

    const renderTableContent = () => {
      if(isLoading) {
        return <ProductTableSkeleton/>
      }

      return (
        <ProductTableBody 
            userProducts={userProducts} 
            handleProductDelete={handleProductDelete}
        />
      )
    };

    return (
        <div className="container mx-auto py-14">
        <Table>
          <ProductTableHeader/>
          {renderTableContent()}
        </Table>
      </div>
    );
};

export default MyProducts;