import React, { createContext, ReactNode } from "react";
import * as Application from 'expo-application';
import { apiAppVersion } from "@/helper/axios";


interface VersionProviderProps {
    children: ReactNode;
}

interface VersionProvider {
    currentVersion: string
    fetchVersion: () => Promise<string>
}

const VersionContext = createContext<VersionProvider>({} as VersionProvider);

export const VersionProvider: React.FC<VersionProviderProps> = ({ children }) => {
    const currentVersion = Application.nativeApplicationVersion || '';

    async function fetchVersion(): Promise<string> {
        return await apiAppVersion.get("latest").then((data) => {
            const responseURL: string = data.request.responseURL;

            if (!responseURL.endsWith("releases")) {
                const latestVersion = responseURL.substring(responseURL.lastIndexOf('v') + 1);

                if (latestVersion == currentVersion) {
                    return 'Aplicativo na versão mais atual';
                } else {
                    return 'Uma versão mais atualizada foi encontrada';
                }
            } else {
                return 'Nenuma versão encontrada';
            }
        }).catch((e) => {
            return 'Erro ao verificar a versão';
        });
    }

    return (
        <VersionContext.Provider value={{ currentVersion, fetchVersion }}>
            {children}
        </VersionContext.Provider>
    )
};

export default VersionContext;