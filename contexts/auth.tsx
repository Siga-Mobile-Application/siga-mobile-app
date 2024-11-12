import api from "@/helper/axios";
import React, { createContext, ReactNode, useState } from "react";
import { Buffer } from "buffer";
import * as SecureStore from 'expo-secure-store';
import { ToastAndroid } from "react-native";
import { router } from "expo-router";

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextData {
    signed: boolean
    user: StudentInfoProps
    signIn: (login: string, pass: string, keepLogin?: boolean) => Promise<void>
    signOut: () => Promise<void>
    verifyKeepLogin: () => Promise<void>
    getAuth: () => Promise<string>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<StudentInfoProps>({} as StudentInfoProps);

    async function signIn(login: string, pass: string, keepLogin?: boolean, auth?: string) {
        const authorization = Buffer.from(`${login} | ${pass}`, 'utf-8').toString('base64');

        if (keepLogin) {
            await SecureStore.setItemAsync('authorization', authorization);
        }

        await api.get('/data', { headers: { authorization } }).then(res => {
            setUser(res.data);
            router.replace('/home');
        }).catch(e => {
            if (!e.status) {
                ToastAndroid.showWithGravity('Problema com o servidor, tente novamente mais tarde', ToastAndroid.SHORT, ToastAndroid.TOP);
            } else {
                ToastAndroid.showWithGravity(e.response.data.error, ToastAndroid.SHORT, ToastAndroid.TOP);
            }
        });
    }

    async function signOut() {
        setUser({} as StudentInfoProps);
        await SecureStore.deleteItemAsync('authorization').finally(() => {
            router.replace('/');
            ToastAndroid.showWithGravity('Você saiu com sucesso!', ToastAndroid.SHORT, ToastAndroid.TOP);
            return Promise.resolve();
        });
    }

    async function verifyKeepLogin() {
        await SecureStore.getItemAsync('authorization')
            .then(async (authorization) => {
                if (authorization) {
                    await api.get('/data', { headers: { authorization } }).then(res => {
                        setUser(res.data);
                        router.replace('/home');
                    }).catch(e => {
                        ToastAndroid.showWithGravity('Problema com o servidor, tente novamente mais tarde', ToastAndroid.SHORT, ToastAndroid.TOP);
                    });
                }
            }).catch(() => { });

        return Promise.resolve();
    }

    async function getAuth() {
        const authorization = await SecureStore.getItemAsync('authorization');

        return authorization ?? "";
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user: user, signIn, signOut, verifyKeepLogin, getAuth }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;