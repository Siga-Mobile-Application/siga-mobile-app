import { VStack } from "@/components/ui/vstack";
import ProfileHeaderIcon from "../avatar-icon-header";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";
import { useContext } from "react";
import AuthContext from "@/contexts/auth";
import { ImageBackground, StyleSheet } from "react-native";
import StyledText from "@/components/styled-text";

export default function ProfileHeader() {
    const { user } = useContext(AuthContext);

    return (
        <VStack className="flex-2 mx-10 w-full">
            <ImageBackground
                source={require('../../../assets/profile/profile-background.png')}
                className="jutify-center items-center"
                style={styles.profileContainer}>
                <ProfileHeaderIcon
                    name={user.nome}
                    image={user.picture} />

                <VStack style={styles.infoContainer}>
                    <StyledText size="lg" text={user.email} fontWeight="bold" />
                    <StyledText size="lg" text={user.ra} fontWeight="bold" />
                </VStack>
            </ImageBackground>
        </VStack>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingVertical: 40,
    },
    infoContainer: {
        rowGap: 20,
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        alignContent: 'center'
    }
})