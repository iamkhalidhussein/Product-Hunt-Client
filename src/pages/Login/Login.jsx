import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom';
import useHandleLogin from "../../hooks/useHandleLogin.js";
import useGoogleSignin from "../../hooks/useGoogleSignin.js";
import useGithubSignin from "../../hooks/useGithubSignin.js";
import { FormInput, PasswordInput, SocialLoginButton } from "../SignUp/SignUp.jsx";


const Login = () => {
    const [password, setPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const passwordToogle = () => {
        setPassword(!password)
    }

    const handleLogin = useHandleLogin(setLoading);
    const signInWithGoogle = useGoogleSignin();
    const signInWithGithub = useGithubSignin();

    return (
        <div className="bg-[#EAF0F2] dark:bg-gray-800 pt-20">
            <div className="rounded-md md:p-16">
                <div className="rounded-md md:p-16 p-10 md:w-1/2 mx-auto dark:bg-gray-600 bg-white">

                    <img
                        className="mx-auto"
                        src="https://i.postimg.cc/0jwXHLS8/main-logo.png"
                        alt="Logo"
                    />

                    <p className="text-center text-[#79808A] dark:text-white text-base inter pb-9 pt-3">
                        Sign in with your social media account to submit, upvote, and bookmark resources.
                    </p>

                    <form onSubmit={handleLogin}>
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
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
                            disabled={loading}
                        >
                            {loading ? "Logging..." : "Login"}
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
                        New here?{" "}
                        <Link to="/signup" className="text-[#686EF8]">
                            Signup
                        </Link>
                    </p>

                    <p className="text-[#79808A] dark:text-white text-base inter font-normal text-center pt-8">
                        We won&#39;t share any post or activity on your profile. Social login is here to fight spam.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;