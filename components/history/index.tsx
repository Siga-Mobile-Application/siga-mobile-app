import { DisciplineHistoryProps } from "@/interfaces/history"
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Badge } from "../ui/badge";
import { HStack } from "../ui/hstack";
import StyledAccordion from "../styled-accordion";

interface HistoryDataProps {
    disciplines: DisciplineHistoryProps[]
}

export default function HistoryData({ disciplines }: HistoryDataProps) {
    const dates = disciplines.map((item) => (item.periodo)).filter((item, index, list) => (list.indexOf(item) == index)).sort((a, b) => Number(a) - Number(b));
    const data = dates.map((date) => ({ title: date, data: disciplines.filter((item) => (item.periodo == date)) }));

    const accordionItems = data.map((section) =>
    ({
        header: String(section.title).substring(0, 4) + '/' + String(section.title).charAt(4),
        content:
            section.data.map((item) => (
                <View style={styles.card} key={item.disciplina}>
                    <View className="mb-5">
                        <Text style={styles.sigla}>{item.disciplina}</Text>
                        <HStack className="items-center">
                            <Text className="mr-5" style={styles.disciplina}>{item.sigla}</Text>
                            <Text>
                                <Badge
                                    action={
                                        item.aprovado.match('Aprovado') || item.observacao.match("Aproveitamento") || item.observacao.match("Proficiência") || item.observacao == "Aprovado" ?
                                            'success' : item.aprovado.match('Em curso') ?
                                                'info' : item.aprovado.match('Reprovado') ?
                                                    'error' : 'info'}
                                    size="sm"
                                    variant="outline">
                                    <Text>{item.observacao.match("Aproveitamento") || item.observacao.match("Proficiência") || item.observacao == "Aprovado" ?
                                        item.observacao : item.aprovado}</Text>
                                </Badge>
                            </Text>
                        </HStack>
                    </View>
                    <Text>Período: {item.periodo}</Text>
                    {
                        item.observacao.match("Aproveitamento") || item.observacao.match("Proficiência") || item.observacao == "Aprovado" ?
                            <></>
                            :
                            <>
                                <Text>Média Final: {item.mediaFinal}</Text>
                                <Text>Frequência: {item.frequencia}</Text>
                                <Text>Faltas: {item.qtdFaltas}</Text>
                                <Text>Observação: {item.observacao}</Text>
                            </>
                    }
                </View>
            ))
    }));

    return (
        <ScrollView className="w-full h-full">
            <StyledAccordion items={accordionItems} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
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
