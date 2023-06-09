import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../firebase";
import { useAuth } from "./AuthProvider";


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    // Sign up user
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
