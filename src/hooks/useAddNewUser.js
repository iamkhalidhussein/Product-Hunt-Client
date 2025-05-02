import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";

const useAddNewUser = (setNewUserAdding, refetch) => {
    const axiosSecure = useAxiosSecure();
    
    const handleSaveUser = async (newUser) => {
        setNewUserAdding(true);
        try {            
            const response = await axiosSecure.post('/users/adduser', {newUser});
            // console.log(response);
            if(response.data.insertedId) {
                await refetch()
                Swal.fire({
                    icon: "success",
                    title: `${newUser.name} is added as new user`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error) {
            console.log('error', error);
        } finally {
            setNewUserAdding(false);
        }
    };

    return handleSaveUser;
};

export default useAddNewUser;