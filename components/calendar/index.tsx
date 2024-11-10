import { DisciplineProps } from "@/interfaces/disciplines";
import { StyleSheet, View } from "react-native";
import StyledTitle from "../styled-title";
import { Text } from "../ui/text";
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from "../ui/table";

interface CalendarProps {
    day: string
    data: DisciplineProps[]
}

export default function Calendar({ day, data }: CalendarProps) {
    return (
        data.length > 0 &&
        <View className="w-full mt-5 p-4" style={styles.container}>
            <StyledTitle size="2xl">{day}</StyledTitle>
            <View className="w-full">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                Horários
                            </TableHead>
                            <TableHead>
                                Disciplina
                            </TableHead>
                            <TableHead>
                                Turma
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    {
                        data.map((item) => (
                            <TableBody key={item.disciplina}>
                                {
                                    item.horario.map((date) => (
                                        <TableRow key={date}>
                                            <TableData>
                                                {date}
                                            </TableData>
                                            <TableData>
                                                {item.disciplina}
                                            </TableData>
                                            <TableData>
                                                {item.turma}
                                            </TableData>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        ))
                    }
                </Table>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'baseline'
    }
})