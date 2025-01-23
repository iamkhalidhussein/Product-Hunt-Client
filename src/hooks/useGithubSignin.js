import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "./useAxiosSecure";
import { ProviderId } from "firebase/auth";

const useGithubSignin = () => {
    const { githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    //github sign in with popup
    const signInWithGithub = async () => {
        try {
            const result = await githubSignIn();
            console.log('result', result);

            const token = await localStorage.setItem('access-token', result?.user?.accessToken);
            console.log("Token:", token);

            // Prepare user information
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.providerData[0]?.email,
                authprovider: ProviderId.GITHUB
            };

            // Save user information to the database
            const response = await axiosSecure.post(`/users/userprofileinfo/${result.user?.providerData[0]?.email}`, userInfo, {
                headers: {
                    'firebase': 'true',
                    'Content-Type': 'application/json'
                }
            });
            console.log("User data saved:", response);

            if (result.user) {
                await Swal.fire({
                    icon: "success",
                    title: "User Successfully Logged In!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
        } catch (error) {
            console.error("Error during GitHub sign-in:", error.message);
        }
    };

    return signInWithGithub;
};

export default useGithubSignin;