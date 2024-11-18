import { Spinner } from "@/components/ui/spinner";
import { Image, View } from "react-native";

export default function Loading() {
    return (
        <View style={{ alignSelf: 'center' }}>
            <Image source={require('@/assets/logo/Logo.png')} alt="Logo Siga" />
            <Spinner size='large' style={{ marginTop: 20 }} color="#0e7be9" />
        </View>
    )
}
