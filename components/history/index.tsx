import { DisciplineHistoryProps } from "@/interfaces/history"
import { View, Text, StyleSheet, FlatList, SectionList } from "react-native";
import StyledTitle from "../styled-title";
import { Badge } from "../ui/badge";
import { HStack } from "../ui/hstack";

interface HistoryDataProps {
    disciplines: DisciplineHistoryProps[]
}

export default function HistoryData({ disciplines }: HistoryDataProps) {
    const renderItem = ({ item }: { item: DisciplineHistoryProps }) => (
        <View style={styles.card}>
            <View className="mb-5">
                <Text style={styles.sigla}>{item.disciplina}</Text>
                <HStack className="items-center">
                    <Text className="mr-5" style={styles.disciplina}>{item.sigla}</Text>
                    <Text>
                        <Badge
                            action={item.aprovado.match('Aprovado') ? 'success' : item.aprovado.match('Reprovado') ? 'error' : 'info'}
                            size="sm"
                            variant="outline">
                            <Text>{item.aprovado}</Text>
                        </Badge>
                    </Text>
                </HStack>
            </View>
            <Text>Período: {item.periodo}</Text>
            <Text>Média Final: {item.mediaFinal}</Text>
            <Text>Frequência: {item.frequencia}</Text>
            <Text>Faltas: {item.qtdFaltas}</Text>
            <Text>Observação: {item.observacao}</Text>
        </View>
    );

    const dates = disciplines.map((item) => (item.periodo)).filter((item, index, list) => (list.indexOf(item) == index));
    const data = dates.map((date) => ({ title: date, data: disciplines.filter((item) => (item.periodo == date)) }));

    return (
        <View style={styles.container} className="w-full h-full">
            <SectionList
                className="w-full"
                sections={data.sort((a, b) => (Number(a.title) - Number(b.title)))}
                keyExtractor={(item) => item.disciplina}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                renderSectionHeader={({ section: { title } }) => (
                    <StyledTitle text={`${title.substring(0, 4)}/${title.charAt(4)}`} />
                )} />
            {/* <FlatList
                className="w-full"
                data={disciplines.sort((a, b) => Number(a.periodo) - Number(b.periodo))}
                renderItem={renderItem}
                keyExtractor={(item) => item.disciplina}
                contentContainerStyle={styles.listContainer}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    listContainer: {
        paddingHorizontal: 10
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    sigla: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    disciplina: {
        fontSize: 16,
    },
});
