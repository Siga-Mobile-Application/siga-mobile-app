import api from "@/helper/axios";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    signed: boolean;
    user: {name: string, email: string, picture: string} | null;
    signIn(login: string, pass: string): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<{name: string, email: string, picture: string} | null>(null);

    async function signIn(login: string, pass: string) {
        const credentials = { user: login, pass: pass };

        await api.post('/data', credentials).then(res => {
            setUser(res.data);
            return Promise.resolve('Sucesso!');
            }).catch(e => {
            return Promise.reject('Erro: ' + e);
        });
    }

    function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user: user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;