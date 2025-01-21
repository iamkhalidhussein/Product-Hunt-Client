import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic.js";

const ProductReview = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);

    const {data: userProductss = [], refetch} = useQuery({
        queryKey: ['userss'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/getSubmittedProduct/${user.email}`, {
            });
            return res.data;
        }
    });
    // console.log(userProductss)
    return (
        <div className="mt-12">
            <h3 className="text-[#1B2530] text-[35px] font-medium">My Products</h3>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Votes</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    userProductss.map((product,idx) => 
                    <tr key={product._id}>
                        <th>{idx+1}</th>
                        <td>{product.title}</td>
                        <td>{product.upvote}</td>
                        <td>{product.pending_status ? 'Accepted' : 'Pending'}</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ProductReview;
