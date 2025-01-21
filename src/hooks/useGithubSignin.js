import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useGithubSignin = () => {
    const { githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    //github sign in with popup
    const signInWithGithub = () => {
        githubSignIn() 
        .then((result) => {
            // console.log(result);
            if(result.user) {
                Swal.fire({
                    icon: "success",
                    title: "User Successfully LoggedIn!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
    return signInWithGithub;
};

export default useGithubSignin;