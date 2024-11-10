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

    return (
        <VStack className="flex-1 h-full w-full mt-5">
            <VStack className="jutify-center items-center my-10 flex-1">
                <StyledTitle text="Rendimento do curso" color="black" />
                <HStack style={styles.contentContainer}>
                    <Card variant="ghost" size="sm">
                        <Heading size="sm">Percentual de progressão</Heading>
                        <Text>{user.pp}</Text>
                    </Card>

                    <Card variant="ghost" size="sm">
                        <Heading size="sm">Percentual de rendimento</Heading>
                        <Text>{user.pr}</Text>
                    </Card>
                </HStack>
            </VStack>

            <VStack className="jutify-center items-center my-10">
                <StyledTitle text="Prazo de integralização" color="black" />
                <HStack style={styles.contentContainer}>
                    <Card variant="ghost" size="sm">
                        <Heading size="sm">Semestres cursados</Heading>
                        <Text>{user.semestre_cursado}</Text>
                    </Card>
                    <Card variant="ghost" size="sm">
                        <Heading size="sm">Semestres restantes</Heading>
                        <Text>{user.semestre_restante}</Text>
                    </Card>
                    <Card variant="ghost" size="sm">
                        <Heading size="sm">Semestres máximo para completar o curso</Heading>
                        <Text>{user.semestre_maximo}</Text>
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