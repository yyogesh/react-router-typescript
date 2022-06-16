import React, { createContext, useState, useContext } from 'react';

interface AuthContextData {
    user: string;
    login: (user: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>(null as any);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string>('');

    const login = (user: string) => {
        setUser(user);
    }

    const logout = () => {
        setUser('');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => { // custom hook
    return useContext(AuthContext);
}