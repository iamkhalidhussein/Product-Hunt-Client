import { useNavigate } from "react-router-dom";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { ProviderId } from "firebase/auth";

const useGoogleSignin = () => {
    const navigate = useNavigate();
    const { googleSignIn } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    //google popup sign in
    const signInWithGoogle = async () => {
        try {
            // Sign in with Google
            const result = await googleSignIn();
            console.log("Google sign-in successful:", result.user);
            
            const token = await localStorage.setItem('access-token', result?.user?.accessToken);
            console.log("Token:", token);

            // Prepare user information
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                authprovider: ProviderId.GOOGLE
            };
    
            // Save user information to the database
            const response = await axiosSecure.post(`/users/userprofileinfo/${result?.user?.email}`, userInfo, {
                headers: {
                    'firebase': 'true',
                    'Content-Type': 'application/json'
                }
            });
            console.log("User data saved:", response);
    
            // Show success message
            if (result.user) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
    
            // Navigate to the home page
            navigate('/');
        } catch (error) {
            console.error("Google sign-in error:", error);
    
            // Show error message
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: error.message || "An error occurred during Google sign-in. Please try again.",
            });
        }
    };

    return signInWithGoogle;
};

export default useGoogleSignin;