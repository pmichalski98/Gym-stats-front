import React, {Dispatch, SetStateAction, useContext, useState} from 'react';
import {User} from "../types/auth";

const AuthContext = React.createContext<ContextValue>({} as ContextValue);
export function useAuth() {
    return useContext(AuthContext);
}
interface Props {
    children: React.ReactNode
}
interface ContextValue {
    currentUser: User | undefined,
    setCurrentUser: Dispatch<SetStateAction<User | undefined>>
    }
function AuthProvider({ children }: Props) {
    const [currentUser, setCurrentUser] = useState<User | undefined>(undefined)

    const value: ContextValue = {
        currentUser,
        setCurrentUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;