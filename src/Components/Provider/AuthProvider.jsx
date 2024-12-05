import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const provider = new GoogleAuthProvider();

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const userInfo = {
        user,
        loading,
        createUser,
        userLogin,
        googleLogIn,
    }

    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;