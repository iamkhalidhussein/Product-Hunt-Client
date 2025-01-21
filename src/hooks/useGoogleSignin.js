import { useNavigate } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const useGoogleSignin = () => {
    const navigate = useNavigate();
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    //google popup sign in
    const signInWithGoogle = () => {
        googleSignIn()
        .then((result) => {
            // console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users/userprofileinfo', userInfo)
            .then((res) => {
                // console.log(res.data);
                if(res.data) {
                    Swal.fire({
                        icon: 'success', 
                        title: 'Login Successfull',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate('/');
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return signInWithGoogle;
};

export default useGoogleSignin;