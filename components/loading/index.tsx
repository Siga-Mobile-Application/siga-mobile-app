import { Spinner } from "@/components/ui/spinner";
import { View } from "react-native";
import { Image } from "../ui/image";

export default function Loading() {
    return (
        <View style={{ alignSelf: 'center' }}>
            <Image source={require('@/assets/logo/Logo1.png')} size="2xl" resizeMode='center' alt="Logo Siga" />
            <Spinner size='large' color="#0e7be9" />
        </View>
    )
}
