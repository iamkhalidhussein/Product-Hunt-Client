import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const useHandleLogin = (setLoading) => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.pathname.state?.from?.pathname || '/';

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
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
            // Sign in the user
            await signIn(email, password);
                
            // Show success message
            Swal.fire({
                title: "Login Successful",
                text: "You have successfully logged in.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });
    
            // Navigate to the intended page
            navigate(from, { replace: true });
        } catch (error) {
            // console.error("Login error:", error);
    
            // Show error message
            Swal.fire({
                title: "Login Failed",
                text: error.message || "An error occurred during login. Please try again.",
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return handleLogin;
};

export default useHandleLogin;