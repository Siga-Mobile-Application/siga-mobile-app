import { useState } from "react";
import { Toast, ToastTitle, useToast } from "../ui/toast";

export default function CustomToast() {
    const [toastId, setToastId] = useState(0);
    const toast = useToast();
    const newId = Math.random();

    setToastId(newId);

    toast.show({
        id: newId.toString(),
        placement: "top",
        duration: 3000,
        render: ({ id }) => {
            const uniqueToastId = "toast-" + id
            return (
                <Toast style={{ marginTop: 70 }} nativeID={uniqueToastId} action="error" variant="solid">
                    <ToastTitle>Preencha todos os campos</ToastTitle>
                </Toast>
            )
        },
    })
}
