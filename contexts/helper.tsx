import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface HelperProviderProps {
    children: ReactNode;
}

interface HelperContext {
    reload: boolean
    useReload: () => void
}

const HelperContext = createContext<HelperContext>({} as HelperContext);

export const HelperProvider: React.FC<HelperProviderProps> = ({ children }) => {
    const [reload, setReload] = useState(false);

    function useReload() {
        setReload(!reload);
    }

    return (
        <HelperContext.Provider value={{ reload, useReload }}>
            {children}
        </HelperContext.Provider>
    )
};

export default HelperContext;