import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";

const useHandleSignup = (imageURL, setLoading) => {
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = imageURL;
        const password = form.password.value;
    
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=]).{6,}$/.test(password)) {
            Swal.fire({
                title: "Invalid Password Format",
                text: "Your password must contain min one lowercase and uppsercase lettter and at least one digit and one special character and password lenght have to be six character or longer",
                icon: "warning"
            });
            return
        }
        
        setLoading(true)
        const data = {name, email, photoURL, password};
        console.log(data);
        
        //create new user
        createUser(data.email, data.password)
        .then((result) => {
            console.log(result.user)
    
            //update user profile
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                //create user entry in the DB
                const userInfo = {
                    name: data.name,
                    email: data.email,
                }
                axiosPublic.post('/users/userprofileinfo', userInfo)
                .then((res) => {
                    console.log('response', res);
                    if(res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: "User Created Successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
            
            //logOut
            logOut()
            .then((result) => {
                console.log(result);
            })
            
            //navigation
            navigate('/login')
            setLoading(false)
        })
    }

    return handleSignUp;
};

export default useHandleSignup;