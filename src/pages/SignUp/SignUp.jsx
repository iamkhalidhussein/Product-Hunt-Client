import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffSharp, IoEyeOutline } from "react-icons/io5";
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SignUp = () => {
    const [password, setPassword] = useState(false);
    const passwordToogle = () => {
        setPassword(!password)
    }

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const {createUser, updateUserProfile, logOut, googleSignIn, githubSignIn} = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=]).{6,}$/.test(password)) {
            Swal.fire({
                title: "Invalid Password Format",
                text: "Your password must contain min one lowercase and uppsercase lettter and at least one digit and one special character and password lenght have to be six character or longer",
                icon: "warning"
            });
            return
        }
        
        const data = {name, email, photoURL, password};
        console.log(data);
        
        //create new user
        createUser(data.email, data.password)
        .then((result) => {
            console.log(result.user)

            //update user profile
            updateUserProfile(data.name, data.photoURL)
            .then((result) => {
                //create user entry in the DB
                const userInfo = {
                    name: data.name,
                    email: data.email,
                }
                axiosPublic.post('/users', userInfo)
                .then((res) => {
                    if(res.data.insertedId) {
                        console.log('user profile updated',result)
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

        })
    }

    //google popup sign in
    const signInWithGoogle = () => {
        googleSignIn()
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    //github popup sign in
    const signInWithGithub = () => {
        githubSignIn()
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
    return (
        <div className="bg-[#EAF0F2] pt-20">
            <div className="rounded-md p-16 w-1/2 mx-auto">
                <div className="bg-white p-10 border rounded-md">
                    <form onSubmit={handleSignUp}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7 h-7 text-xl">✕</button>
                    <img className="mx-auto" src="https://i.postimg.cc/0jwXHLS8/main-logo.png" alt="#" />
                    <p className="text-center text-[#79808A] text-base inter pb-9 pt-3">Sign up with your social media account to submit, <br /> upvote and bookmark resources.</p>
                    <label>Name</label> <br />
                    <input className="border w-full py-3 pl-4 bg-white rounded-md mt-1 mb-3" type="text" name="name" id="" placeholder="Your Name" required/> <br />
                    <label>Email</label> <br />
                    <input className="border w-full py-3 pl-4 bg-white rounded-md mt-1 mb-3" type="email"  name="email" id="" placeholder="Your Email" required/> <br />
                    <label>Photo</label> <br />
                    <input className="border w-full py-3 pl-4 bg-white rounded-md mt-1 mb-3" type="text" name="photoURL" id="" placeholder="PhotoURL" required/> <br />
                    <label>Password</label> <br />
                    <div className="flex relative"><input className="border w-full py-3 pl-4 bg-white rounded-md mt-1 mb-3" type={`${password ? 'text' : 'password'}`} name="password" id="" placeholder="Your Password" required/><div onClick={passwordToogle} className="absolute right-3 top-[19px]"><IoEyeOutline className={`${password ? 'hidden' : 'visible'} text-xl` }/><IoEyeOffSharp className={`${password ? 'visible' : 'hidden'} text-xl`}/></div></div><br />
                    <input className="border py-3 w-full hover:text-black rounded-md mb-4 text-white cursor-pointer bg-[#686EF8] hover:bg-blue-50 duration-200" type="submit" value="Signup" />
                    </form>
                    
                    <div className="flex flex-col w-full">
                        <div className="divider">Or</div>
                    </div>

                    <div onClick={signInWithGoogle} className="border py-3 rounded flex gap-3 items-center justify-center hover:bg-[#F5F8F9] duration-200 cursor-pointer group">
                        <FcGoogle className="text-2xl"/>
                        <p className="text-[#79808A] text-base inter font-normal group-hover:text-[#686EF8]">Sign in with Google</p>
                    </div>
                    <div onClick={signInWithGithub} className="border py-3 mt-3 rounded flex gap-3 items-center justify-center hover:bg-[#F5F8F9] duration-200 cursor-pointer group">
                        <FaGithub className="text-2xl"/>
                        <p className="text-[#79808A] group-hover:text-[#686EF8] text-base inter font-normal">Sign in with Github</p>
                    </div>
                    <p className="text-[#000] pt-1">Already have an account? <Link to='/login' className="text-[#686EF8]">Login</Link></p>
                    <p className="text-[#79808A] text-base inter font-normal text-center pt-8">We won't share any post or activity on your <br /> profile, social login is here to fight spam.</p>
                </div>
                </div>
        </div>
    );
};

export default SignUp;