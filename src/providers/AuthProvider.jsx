import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const axiosPublic = useAxiosPublic();
   

    const createUser = (email, password ) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = async () => {
        setLoading(true);
        await axiosPublic(`/logout`, {
            withCredentials: true,
          })
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            
            
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}; 

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;