import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState } from 'react';
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

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userLogout = () => {
        setLoading(true);
        return signOut(auth)

    }

    const authInfo = {
        user,
        loading
    }




    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    )


}
export default AuthProvider;
