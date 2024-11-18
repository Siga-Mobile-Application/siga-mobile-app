import StyledButton from "@/components/styled-button";
import { Image } from "@/components/ui/image";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import StudentCard from "@/components/student-card";

export default function UserCard() {
    return (
        <View className="h-full w-full bg-slate-300">
            <View style={styles.containerBack}>
                <StyledButton onClick={() => { router.replace('../home/(tabs)/profile') }} customIcon={<FontAwesome name="arrow-left" size={30} />} />
            </View>
            <View style={styles.containerCard}>
                <StudentCard />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        flexGrow: 1,
        marginHorizontal: 10,
        marginVertical: 20
    },
    containerBack: {
        flexShrink: 1,
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: 40,
    }
})
