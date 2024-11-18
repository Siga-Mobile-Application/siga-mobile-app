import api from "@/helper/axios";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { Buffer } from "buffer";
import * as SecureStore from 'expo-secure-store';
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from '@react-native-community/netinfo';
import * as LocalAuthentication from 'expo-local-authentication';
import HelperContext from "./assistant";

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextData {
    signed: boolean
    user: StudentInfoProps
    signIn: (login: string, pass: string, keepLogin?: boolean) => Promise<string>
    signOut: () => Promise<void>
    verifyKeepLogin: () => Promise<void>
    getAuth: () => Promise<string>
    isConnected: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<StudentInfoProps>({} as StudentInfoProps);
    const [isConnected, setIsConnected] = useState(false);

    const { showToast, closeToast } = useContext(HelperContext);

    async function signIn(login: string, pass: string, keepLogin?: boolean, auth?: string) {
        let toastNumb;

        toastNumb = showToast({ title: 'Verificando...', action: 'info' });

        return await verifyConnection().then(async (con) => {
            if (con) {
                let message = '';
                const authorization = Buffer.from(`${login} | ${pass}`, 'utf-8').toString('base64');

                await SecureStore.setItemAsync('authorization', authorization);

                await api.get('/data/basic', { headers: { authorization } }).then(async (res) => {
                    if (keepLogin) {
                        await AsyncStorage.setItem('keepLogin', 'true');
                        await SecureStore.setItemAsync('user', JSON.stringify(res.data));
                    }
                    setUser(res.data);
                    router.replace('/home');
                }).catch(async e => {
                    closeToast(toastNumb);
                    if (!e.status) {
                        showToast({ title: 'Problema com o servidor', message: 'Tente novamente mais tarde', action: 'error' });
                    } else {
                        if (e.response.data.error.indexOf('Login e Senha')) {
                            showToast({title: e.response.data.error, action: 'error'});
                            message = e.response.data.error;
                        } else {
                            showToast({ title: 'Erro', message: e.response.data.error, action: 'error' });
                        }
                    }
                });

                return message;
            } else {
                closeToast(toastNumb);
                showToast({ title: 'Sem conexão com a internet', action: 'info' });
                return '';
            }
        });
    }

    async function removeKeys() {
        setUser({} as StudentInfoProps);
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    }

    async function signOut() {
        await removeKeys();
        await SecureStore.deleteItemAsync('authorization').finally(() => {
            router.replace('/');
            showToast({ title: 'Você saiu da sua conta', action: 'info' });
            return Promise.resolve();
        });
    }

    async function verifyConnection() {
        return await NetInfo.fetch().then(async state => {
            setIsConnected(state.isInternetReachable!)
            return state.isInternetReachable;
        });
    }

    async function verifyKeepLogin() {
        await AsyncStorage.getItem('keepLogin').then(async (res) => {
            if (res == 'true') {
                await LocalAuthentication.authenticateAsync().then(async (res) => {
                    if (res.success) {
                        showToast({ title: 'Acessando conta...', action: 'success' });
                        await verifyConnection().then(async (conn) => {
                            if (conn) {
                                await SecureStore.getItemAsync('authorization')
                                    .then(async (authorization) => {
                                        if (authorization) {
                                            await api.get('/data/basic', { headers: { authorization } }).then(res => {
                                                setUser(res.data);
                                                router.replace('/home');
                                            }).catch(e => {
                                                if (!e.status) {
                                                    showToast({ title: 'Problema com o servidor', message: 'Tente novamente mais tarde', action: 'error' });
                                                } else {
                                                    showToast({ title: 'Erro', message: e.response.data.error, action: 'error' });
                                                }
                                            });
                                        }
                                    }).catch(() => { });
                            } else {
                                const user = await SecureStore.getItemAsync('user');

                                if (user) {
                                    setUser(JSON.parse(user));
                                    router.replace('/home');
                                }
                            }
                        });
                    } else {
                        showToast({ title: 'Conta desconectada', action: 'info' });
                        removeKeys();
                    }
                });
            } else {
                removeKeys();
                await SecureStore.deleteItemAsync('authorization');
            }
        });
    }

    async function getAuth() {
        return await verifyConnection().then(async (conn) => {
            if (conn) {
                const authorization = await SecureStore.getItemAsync('authorization');

                return authorization ?? "";
            } else {
                return "Sem conexão com a internet";
            }
        });
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user: user, signIn, signOut, verifyKeepLogin, getAuth, isConnected }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;