import React, { createContext, ReactNode } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    signed: boolean,
    login: string,
    pass: string,
    user: object
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => (
    <AuthContext.Provider value={{ signed: false, login: '', pass: '', user: {} }}>
        {children}
    </AuthContext.Provider>
);

export default AuthContext;