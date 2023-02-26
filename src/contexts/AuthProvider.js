import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const userSignUP = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserInfo = profile => {
        return updateProfile(auth.currentUser, profile)
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // observe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])


    const userLogout = () => {
        setLoading(true);
        return signOut(auth)

    }

    const authInfo = {
        user,
        loading,
        userLogout,
        userLogin,
        userSignUP,
        updateUserInfo
    }




    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    )


}
export default AuthProvider;
