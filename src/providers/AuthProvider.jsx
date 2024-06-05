import { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import {app} from '../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoURL
        })
        .then((result) => {
            console.log(result)
        })
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const githubSignIn = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser) {
                //get token and store client
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then((res) => {
                    if(res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else {
                //remove token, if token stored in the client side
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        })
        return () => {
            return unSubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

