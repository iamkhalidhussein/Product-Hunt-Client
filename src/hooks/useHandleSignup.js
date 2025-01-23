import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "./useAxiosSecure";

const useHandleSignup = (imageURL, setLoading) => {
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = imageURL;
        const password = form.password.value;
    
        // Validate password format
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=]).{6,}$/.test(password)) {
            Swal.fire({
                title: "Invalid Password Format",
                text: "Your password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least six characters long.",
                icon: "warning",
            });
            return;
        }
    
        setLoading(true);
    
        try {
            // Create user in Firebase
            const userCredential = await createUser(email, password);
            console.log("User created:", userCredential.user);
    
            // Update user profile in Firebase
            await updateUserProfile(name, photoURL);
            console.log("User profile updated");
    
            // Create user entry in the database
            const userInfo = { name, email };
            const dbResponse = await axiosSecure.post('/users/userprofileinfo', userInfo);
    
            if (dbResponse.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "User Created Successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
    
            // Log out the user
            await logOut();
            console.log("User logged out");
    
            // Navigate to the login page
            navigate('/login');
        } catch (error) {
            // console.error("Error during sign-up:", error.message);
            Swal.fire({
                icon: "error",
                title: "Sign-Up Failed",
                text: error.message || "An error occurred during sign-up. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return handleSignUp;
};

export default useHandleSignup;