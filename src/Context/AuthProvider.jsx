import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../FIrebase/Firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";

export const authContext = createContext(null) //create context


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUserByEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        })
    }



    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const SignInWithGoogle =()=>{
       return signInWithPopup(auth, googleProvider)
    }
    const SignInWithGithub =()=>{
       return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('currentUser on the auth is', currentUser)
            setUser(currentUser)
            setLoading(false)
            
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log('user logout successfully')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const authInfo = { user, 
                       setUser, 
                       createUserByEmailAndPassword, 
                       updateUserProfile, 
                       signInUser, 
                       SignInWithGoogle,
                       loading,
                       SignInWithGithub,
                       logout }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;