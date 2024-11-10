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

                <HStack>
                    <StyledText text={user.email} fontWeight="bold" />
                    <Divider orientation="vertical" className="mx-2 h-[20px]  bg-black" />
                    <StyledText text={user.ra} fontWeight="bold" />
                </HStack>
            </ImageBackground>
        </VStack>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingVertical: 40,
    },
    infoContainer: {
        marginTop: 40
    }
})