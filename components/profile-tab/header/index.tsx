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

    const profileInfo = {
        nome: 'Carlos',
        curso: 'Analise e Desenvolvimetnto de Sistemas', ra: '11111111111', ciclo: '4',
        pp: '50%', pr: '9', 'pp(Intercâmbio)': '68%',
        cursando: '4', maximo: '10', faltam: '6',
        email: 'email@email.email'
    };

    return (
        <VStack className="flex-2 mx-10 w-full">
            <ImageBackground
                source={require('../../../assets/profile/profile-background.png')}
                className="jutify-center items-center"
                style={styles.profileContainer}>
                <ProfileHeaderIcon
                    name={profileInfo.nome}
                    image={user?.picture}
                    subTitle={profileInfo.curso} />

                <Divider orientation="horizontal" className="my-2 bg-black" />

                <HStack>
                    <StyledText text={profileInfo.email} fontWeight="bold" />
                    <Divider orientation="vertical" className="mx-2 h-[20px]  bg-black" />
                    <StyledText text={profileInfo.ra} fontWeight="bold" />
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