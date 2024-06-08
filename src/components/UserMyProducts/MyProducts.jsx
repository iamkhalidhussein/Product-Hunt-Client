import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";

const MyProducts = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    axiosSecure.get(`/users/getSubmittedProduct/${user.email}`)
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.log(error);
    })
    return (
        <div>
            <h3>my products page</h3>
        </div>
    );
};

export default MyProducts;