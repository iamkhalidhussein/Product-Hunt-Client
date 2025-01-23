import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffSharp, IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import useHandleSignup from "../../hooks/useHandleSignup.js";
import useGoogleSignin from "../../hooks/useGoogleSignin.js";
import useGithubSignin from "../../hooks/useGithubSignin.js";
import InputFile from "../../components/InputFile/InputFile";
import PropTypes from 'prop-types';
import { Loader2 } from 'lucide-react';

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

                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-7 h-7 text-xl">
                        ✕
                    </button>

                    <img
                        className="mx-auto"
                        src="https://i.postimg.cc/0jwXHLS8/main-logo.png"
                        alt="Logo"
                    />

                    <p className="text-center text-[#79808A] dark:text-white text-base inter pb-9 pt-3">
                        Sign up with your social media account to submit, upvote, and bookmark resources.
                    </p>

                    <form onSubmit={handleSignUp}>
                        <FormInput label="Name" type="text" name="name" placeholder="Your Name" required />
                        <FormInput label="Email" type="email" name="email" placeholder="Your Email" required />
                        <InputFile onImageChange={handleImageChange} />
                        <PasswordInput
                            label="Password"
                            name="password"
                            placeholder="Your Password"
                            password={password}
                            passwordToogle={passwordToogle}
                            required
                        />
                        <button
                            type="submit"
                            className="border py-3 w-full hover:text-black rounded-md mb-4 text-white cursor-pointer bg-[#686EF8] hover:bg-blue-50 duration-200"
                            disabled={!imageURL || loading}
                        >
                            {loading ? <Loader2 className="animate-spin mx-auto"/> : "Sign Up"}
                        </button>
                    </form>

                    <div className="flex flex-col w-full">
                        <div className="divider">Or</div>
                    </div>

                    <SocialLoginButton
                        icon={<FcGoogle className="text-2xl" />}
                        text="Sign in with Google"
                        onClick={signInWithGoogle}
                    />
                    <SocialLoginButton
                        icon={<FaGithub className="text-2xl" />}
                        text="Sign in with Github"
                        onClick={signInWithGithub}
                        className="mt-3"
                    />

                    <p className="text-[#000] dark:text-white pt-1">
                        Already have an account?{" "}
                        <Link to="/login" className="text-[#686EF8]">
                            Login
                        </Link>
                    </p>

                    <p className="text-[#79808A] md:w-3/4 mx-auto dark:text-white text-base inter font-normal text-center pt-8">
                        We won&apos;t share any post or activity on your profile. Social login is here to fight spam.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

export const FormInput = ({ label, type, name, placeholder, required }) => {
    return (
        <>
            <label>{label}</label> <br />
            <input
                className="border w-full py-3 pl-4 dark:text-black bg-white rounded-md mt-1 mb-3"
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
            />{" "}
            <br />
        </>
    )
};

export const PasswordInput = ({ 
    label, 
    name, 
    placeholder, 
    password, 
    passwordToogle, 
    required }) => {

    return (
        <>
        <label>{label}</label> <br />
        <div className="flex relative">
            <input
                className="border w-full py-3 pl-4 bg-white dark:text-black rounded-md mt-1 mb-3"
                type={password ? "text" : "password"}
                name={name}
                placeholder={placeholder}
                required={required}
            />
            <div onClick={passwordToogle} className="absolute right-3 top-[19px]">
                {password ? <IoEyeOffSharp className="text-xl" /> : <IoEyeOutline className="text-xl" />}
            </div>
        </div>
        <br />
        </>
    )
};

export const SocialLoginButton = ({ icon, text, onClick, className = "" }) => {
    return (
        <div
            onClick={onClick}
            className={`border py-3 rounded flex gap-3 items-center justify-center hover:bg-[#F5F8F9] duration-200 cursor-pointer group ${className}`}
        >
            {icon}  
            <p className="text-[#79808A] dark:text-white text-base inter font-normal group-hover:text-[#686EF8]">
            {text}
            </p>
        </div>
    )
};

FormInput.propTypes = {
    label: PropTypes.string, 
    type: PropTypes.string, 
    name: PropTypes.string, 
    placeholder: PropTypes.string, 
    required: PropTypes.bool
};

PasswordInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string, 
    placeholder: PropTypes.string, 
    password: PropTypes.string, 
    passwordToogle: PropTypes.func, 
    required: PropTypes.bool
};

SocialLoginButton.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
};