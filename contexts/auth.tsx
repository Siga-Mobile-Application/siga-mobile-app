import api from "@/helper/axios";
import React, { createContext, ReactNode, useState } from "react";
import { Buffer } from "buffer";
import * as SecureStore from 'expo-secure-store';
import { ToastAndroid } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from '@react-native-community/netinfo';
import * as LocalAuthentication from 'expo-local-authentication';

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

    async function signIn(login: string, pass: string, keepLogin?: boolean, auth?: string) {
        return await verifyConnection().then(async (con) => {
            if (con) {
                let message = '';
                const authorization = Buffer.from(`${login} | ${pass}`, 'utf-8').toString('base64');

                await SecureStore.setItemAsync('authorization', authorization);

                await api.get('/data', { headers: { authorization } }).then(async (res) => {
                    if (keepLogin) {
                        await AsyncStorage.setItem('keepLogin', 'true');
                        await SecureStore.setItemAsync('user', JSON.stringify(res.data));
                    }

                    setUser(res.data);
                    router.replace('/home');
                }).catch(async e => {
                    if (!e.status) {
                        ToastAndroid.showWithGravity('Problema com o servidor, tente novamente mais tarde', ToastAndroid.SHORT, ToastAndroid.TOP);
                    } else {
                        if (e.response.data.error.indexOf('Login e Senha')) {
                            message = e.response.data.error;
                        } else {
                            ToastAndroid.showWithGravity(e.response.data.error, ToastAndroid.SHORT, ToastAndroid.TOP);
                        }
                    }
                });

                return message;
            } else {
                ToastAndroid.showWithGravity("Sem conexão com a internet", ToastAndroid.SHORT, ToastAndroid.TOP);
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
        removeKeys();
        await SecureStore.deleteItemAsync('authorization').finally(() => {
            router.replace('/');
            ToastAndroid.showWithGravity('Você saiu com sucesso!', ToastAndroid.SHORT, ToastAndroid.TOP);
            return Promise.resolve();
        });
    }

    async function verifyConnection() {
        return await NetInfo.fetch().then(async state => {
            setIsConnected(!state.isInternetReachable!)
            return !state.isInternetReachable;
        });
    }

    async function verifyKeepLogin() {
        verifyConnection().then(async (conn) => {
            await AsyncStorage.getItem('keepLogin').then(async (res) => {
                if (res == 'true') {
                    if (conn) {
                        await SecureStore.getItemAsync('authorization')
                            .then(async (authorization) => {
                                if (authorization) {
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
                            }).catch(() => { });
                    } else {
                        LocalAuthentication.authenticateAsync().then(async (res) => {
                            if (res.success) {
                                const user = await SecureStore.getItemAsync('user');

                                if (user) {
                                    setUser(JSON.parse(user));
                                    router.replace('/home');
                                }
                            } else {
                                removeKeys();
                            }
                        })
                    }
                } else {
                    removeKeys();
                    await SecureStore.deleteItemAsync('authorization');
                }
            })
        });

        return Promise.resolve();
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