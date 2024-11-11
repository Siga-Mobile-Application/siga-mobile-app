import { Spinner } from "@/components/ui/spinner";
import { Image } from "react-native";

export default function Loading() {
    return (
        <>
            <Image source={require('@/assets/logo/Logo.png')} alt="Logo Siga" />
            <Spinner size='large' style={{ alignSelf: 'center', marginTop: 20 }} color="#0e7be9" />
        </>
    )
}