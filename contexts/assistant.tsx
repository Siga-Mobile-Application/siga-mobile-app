import React, { createContext, ReactNode, useState } from "react";
import { useToast, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast"

interface ToastProps {
    action?: "muted" | "error" | "warning" | "success" | "info"
    variant?: "solid" | "outline"
    title: string
    message?: string
}

interface HelperProviderProps {
    children: ReactNode;
}

interface HelperContext {
    reload: boolean
    useReload: () => void
    showToast: (props: ToastProps) => string
    closeToast: (id: string) => void
}

const HelperContext = createContext<HelperContext>({} as HelperContext);

export const HelperProvider: React.FC<HelperProviderProps> = ({ children }) => {
    const [reload, setReload] = useState(false);

    const toast = useToast();

    function useReload() {
        setReload(!reload);
    }

    function showToast(props: ToastProps) {
        const newId = Math.random();

        toast.show({
            id: newId.toString(),
            placement: "top",
            duration: 3000,
            render: ({ id }) => {
                const uniqueToastId = "toast-" + id
                return (
                    <Toast style={{ marginTop: 70 }} nativeID={uniqueToastId} action={props.action} variant={props.variant}>
                        <ToastTitle>{props.title}</ToastTitle>
                        {props.message && <ToastDescription>{props.message}</ToastDescription>}
                    </Toast>
                )
            },
        });

        return newId.toString();
    }

    function closeToast(id: string) {
        toast.close(id);
    }

    return (
        <HelperContext.Provider value={{ reload, useReload, showToast, closeToast }}>
            {children}
        </HelperContext.Provider>
    )
};

export default HelperContext;