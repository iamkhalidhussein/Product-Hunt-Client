import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const useHandleLogin = (setLoading) => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.pathname.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=]).{6,}$/.test(password)) {
            Swal.fire({
                title: "Invalid Password Format",
                text: "Your password must contain min one lowercase and uppsercase lettter and at least one digit and one special character and password lenght have to be six character or longer",
                icon: "warning"
            });
            return;
        }
        
        // console.log(email, password);
        setLoading(true);
        signIn(email, password)
        .then((result) => {
            // console.log(result.user);
            if(result.user) {
                Swal.fire({
                    title: "Login Successfull",
                    text: "You have successfully logged in",
                    icon: "success"
                });
            }
            navigate(from, {replace: true})
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
            Swal.fire({
                title: "Login Failed",
                text: `${error.message}`,
                icon: "error"
            });
        })
    }
    return handleLogin;
};

export default useHandleLogin;