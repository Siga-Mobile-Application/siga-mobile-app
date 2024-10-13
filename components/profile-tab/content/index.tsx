import { VStack } from "@/components/ui/vstack";
import { useContext } from "react";
import AuthContext from "@/contexts/auth";
import { StyleSheet } from "react-native";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import StyledTitle from "@/components/styled-title";

export default function ProfileContent() {
    const { user } = useContext(AuthContext);

    const profileInfo = {
        nome: 'Carlos',
        curso: 'Analise e Desenvolvimetnto de Sistemas', ra: '11111111111', ciclo: '4',
        pp: '50%', pr: '9', 'pp(Intercâmbio)': '68%',
        cursando: '4', maximo: '10', faltam: '6',
        email: 'email@email.email'
    };

    return (
        <VStack className="flex-1 h-full w-full mt-5">
            <VStack className="jutify-center items-center my-10 flex-1">
                <StyledTitle text="Rendimento do curso" color="black" />
                <HStack style={styles.contentContainer}>
                    <Card variant="ghost" size="sm">
                        <Heading size="sm">Percentual de progressão</Heading>
                        <Text>{profileInfo.pp}</Text>
                    </Card>

                    <Card variant="ghost" size="sm">
                        <Heading size="sm">Percentual de rendimento</Heading>
                        <Text>{profileInfo.pp}</Text>
                    </Card>

                    <Card variant="ghost" size="sm">
                        <Heading size="sm">PP (intercâmbio)</Heading>
                        <Text>{profileInfo.pp}</Text>
                    </Card>
                </HStack>
            </VStack>

            <VStack className="jutify-center items-center my-10">
                <StyledTitle text="Prazo de integralização" color="black" />
                <HStack style={styles.contentContainer}>
                    <Card variant="ghost" size="sm">
                        <Heading size="sm">Percentual de progressão</Heading>
                        <Text>{profileInfo.pp}</Text>
                    </Card>

                    <Card variant="ghost" size="sm">
                        <Heading size="sm">Percentual de rendimento</Heading>
                        <Text>{profileInfo.pp}</Text>
                    </Card>

                    <Card variant="ghost" size="sm">
                        <Heading size="sm">PP (intercâmbio)</Heading>
                        <Text>{profileInfo.pp}</Text>
                    </Card>
                </HStack>
            </VStack>
        </VStack>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    },
})