import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
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
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const userLogout = () => {
        setLoading(true)
        return signOut(auth)
    } 

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    if(loading){
        return <div className="flex items-center justify-center"><span className="loading loading-bars loading-lg"></span></div>
    }

    const userInfo = {
        user,
        loading,
        createUser,
        userLogin,
        googleLogIn,
        userLogout
    }

    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;