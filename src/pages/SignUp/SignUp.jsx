import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffSharp, IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import useHandleSignup from "../../hooks/useHandleSignup.js";
import useGoogleSignin from "../../hooks/useGoogleSignin.js";
import useGithubSignin from "../../hooks/useGithubSignin.js";
import InputFile from "../../components/InputFile/InputFile";

const SignUp = () => {
    const [imageURL, setImageURL] = useState(null);
    const [password, setPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const passwordToogle = () => {
        setPassword(!password)
    }

    const handleSignUp = useHandleSignup(imageURL, setLoading);
    const signInWithGoogle = useGoogleSignin();
    const signInWithGithub = useGithubSignin();

    const handleImageChange = (imgUrl) => {
        setImageURL(imgUrl)
    }

    return (
        <div className="bg-[#EAF0F2] dark:bg-gray-800 pt-20">
            <div className="rounded-md md:p-16 md:w-1/2 mx-auto">
                <div className="bg-white dark:bg-gray-600 p-10 border rounded-md">
                    <form onSubmit={handleSignUp}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7 h-7 text-xl">✕</button>
                    <img className="mx-auto" src="https://i.postimg.cc/0jwXHLS8/main-logo.png" alt="#" />
                    <p className="text-center text-[#79808A] dark:text-white text-base inter pb-9 pt-3">Sign up with your social media account to submit, upvote and bookmark resources.</p>
                    <label>Name</label> <br />
                    <input className="border w-full py-3 pl-4 dark:text-black bg-white rounded-md mt-1 mb-3" type="text" name="name" id="" placeholder="Your Name" required/> <br />
                    <label>Email</label> <br />
                    <input className="border w-full py-3 pl-4 dark:text-black bg-white rounded-md mt-1 mb-3" type="email"  name="email" id="" placeholder="Your Email" required/> <br />
                    <InputFile onImageChange={handleImageChange}/> <br />
                    <label>Password</label> <br />
                    <div className="flex relative"><input className="border w-full py-3 pl-4 bg-white dark:text-black rounded-md mt-1 mb-3" type={`${password ? 'text' : 'password'}`} name="password" id="" placeholder="Your Password" required/><div onClick={passwordToogle} className="absolute right-3 top-[19px]"><IoEyeOutline className={`${password ? 'hidden' : 'visible'} text-xl` }/><IoEyeOffSharp className={`${password ? 'visible' : 'hidden'} text-xl`}/></div></div><br />
                    <input className="border py-3 w-full hover:text-black rounded-md mb-4 text-white cursor-pointer bg-[#686EF8] hover:bg-blue-50 duration-200" type="submit" disabled={!imageURL || loading && true} value={`${loading ? 'Signing Up...' : 'SignUp'}`} />
                    </form>
                    
                    <div className="flex flex-col w-full">
                        <div className="divider">Or</div>
                    </div>

                    <div onClick={signInWithGoogle} className="border py-3 rounded flex gap-3 items-center justify-center hover:bg-[#F5F8F9] duration-200 cursor-pointer group">
                        <FcGoogle className="text-2xl"/>
                        <p className="text-[#79808A] dark:text-white text-base inter font-normal group-hover:text-[#686EF8]">Sign in with Google</p>
                    </div>
                    <div onClick={signInWithGithub} className="border py-3 mt-3 rounded flex gap-3 items-center justify-center hover:bg-[#F5F8F9] duration-200 cursor-pointer group">
                        <FaGithub className="text-2xl"/>
                        <p className="text-[#79808A] dark:text-white group-hover:text-[#686EF8] text-base inter font-normal">Sign in with Github</p>
                    </div>
                    <p className="text-[#000] dark:text-white pt-1">Already have an account? <Link to='/login' className="text-[#686EF8]">Login</Link></p>
                    <p className="text-[#79808A] md:w-3/4 mx-auto dark:text-white text-base inter font-normal text-center pt-8">We won&apos;t share any post or activity on your profile, social login is here to fight spam.</p>
                </div>
                </div>
        </div>
    );
};

export default SignUp;